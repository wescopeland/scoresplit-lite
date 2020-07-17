import { Injectable } from '@angular/core';
import { StateHistoryPlugin, transaction } from '@datorama/akita';
import { mean, sum } from 'lodash';

import { AppSession } from './models/app-session.model';
import { SessionStore } from './session.store';
import { SessionQuery } from './session.query';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private _stateHistory: StateHistoryPlugin;

  constructor(private _store: SessionStore, private _query: SessionQuery) {
    this._stateHistory = new StateHistoryPlugin(this._query);
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

  calculatePace(
    currentState: AppSession,
    repeatingLevelCount: number,
    divisor: number
  ): number {
    if (!currentState.currentStart || !currentState.levelScores.length) {
      return null;
    }

    const levelAverage = mean(currentState.levelScores);
    let pace = currentState.currentStart + levelAverage * repeatingLevelCount;

    pace = Math.round(pace / divisor) * divisor;
    pace += sum(currentState.bonuses);
    pace += sum(currentState.deaths);

    return pace;
  }

  @transaction()
  handleUserInput(
    input: string,
    repeatingLevelCount: number,
    divisor: number
  ): void {
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

    const state = this._query.getValue();

    const newPaces = [...state.paces];
    const newPace = this.calculatePace(state, repeatingLevelCount, divisor);

    if (newPace) {
      newPaces.push(newPace);
    }

    this._store.update({
      currentPace: newPace,
      paces: newPaces,
    });
  }

  printPaces(): void {
    const { paces } = this._query.getValue();

    if (paces.length >= 4) {
      console.table(paces);
    }
  }

  reset(): void {
    this.printPaces();
    this._store.reset();
  }

  submitBonus(score: number): void {
    const currentBonuses = this._query.getValue().bonuses;
    this._store.update({
      bonuses: [...currentBonuses, this.convertShorthand(score)],
    });
  }

  submitDeath(score: number): void {
    const currentDeaths = this._query.getValue().deaths;
    const subtractionCache = this._query.getValue().subtractionCache;

    this._store.update({
      deaths: [...currentDeaths, this.convertShorthand(score)],
    });

    this.addToSubtractionCache(this.convertShorthand(score));
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
        levelScores: [...currentState.levelScores, realScore],
      });

      this.clearSubtractionCache();
      this.addToSubtractionCache(this.convertShorthand(score));
    }
  }

  undo(): void {
    this._stateHistory.undo();
  }
}
