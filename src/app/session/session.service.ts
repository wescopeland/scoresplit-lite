import { Injectable } from '@angular/core';
import { mean, sum } from 'lodash';
import { Observable } from 'rxjs';

import { AppSession } from './models/app-session.model';
import { SessionStore } from './session.store';
import { SessionQuery } from './session.query';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private _store: SessionStore, private _query: SessionQuery) {
    this._query.select('levelScores').subscribe(() => {
      const state = this._query.getValue();

      this._store.update({
        currentPace: this.calculatePace(state)
      });
    });
  }

  private convertShorthand(score: number): number {
    const shorthandMultiplier = this._query.getValue().shorthandMultiplier;

    if (shorthandMultiplier) {
      return score * shorthandMultiplier;
    } else {
      return score;
    }
  }

  private isBonus(input: string): boolean {
    return input.toLowerCase().includes('b');
  }

  private isDeath(input: string): boolean {
    return input.toLowerCase().includes('d');
  }

  addToSubtractionCache(add: number) {
    const currentSubtractionCache = this._query.getValue().subtractionCache;
    this._store.update({ subtractionCache: currentSubtractionCache + add });
  }

  clearSubtractionCache(): void {
    this._store.update({ subtractionCache: 0 });
  }

  calculatePace(currentState: AppSession): number {
    if (!currentState.currentStart || !currentState.levelScores.length) {
      return null;
    }

    const levelAverage = mean(currentState.levelScores);
    console.log('levelAverage', levelAverage);

    let pace =
      currentState.currentStart +
      levelAverage * currentState.nonStartLevelCount;

    pace += sum(currentState.bonuses);
    pace += sum(currentState.deaths);

    console.log('pace', pace);
    return pace;
  }

  handleUserInput(input: string): void {
    // This must be a mistake.
    if (this.isBonus(input) && this.isDeath(input)) {
      return;
    }

    if (this.isBonus(input)) {
      const scoreNumber = Number(input.split('b')[0]);
      this.submitBonus(scoreNumber);

      return;
    }

    if (this.isDeath(input)) {
      const scoreNumber = Number(input.split('d')[0]);
      this.submitDeath(scoreNumber);

      return;
    }

    // We'll arrive here if it's not a bonus or a death.
    this.submitScore(Number(input));
  }

  submitBonus(score: number): void {
    const currentBonuses = this._query.getValue().bonuses;
    this._store.update({
      bonuses: [...currentBonuses, this.convertShorthand(score)]
    });
  }

  submitDeath(score: number): void {
    const currentDeaths = this._query.getValue().deaths;
    const subtractionCache = this._query.getValue().subtractionCache;

    this._store.update({
      deaths: [
        ...currentDeaths,
        this.convertShorthand(score) - subtractionCache
      ]
    });

    this.addToSubtractionCache(this.convertShorthand(score) - subtractionCache);
  }

  submitScore(score: number): void {
    const currentState = this._query.getValue();

    if (!currentState.currentStart) {
      this._store.update({ currentStart: this.convertShorthand(score) });

      this.clearSubtractionCache();
      this.addToSubtractionCache(this.convertShorthand(score));
      return;
    } else {
      const realScore =
        this.convertShorthand(score) - currentState.subtractionCache;

      this._store.update({
        levelScores: [...currentState.levelScores, realScore]
      });

      this.clearSubtractionCache();
      this.addToSubtractionCache(this.convertShorthand(score));
    }
  }
}
