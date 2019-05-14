import { Injectable } from '@angular/core';

import { SessionStore } from './session.store';
import { SessionQuery } from './session.query';

@Injectable({ providedIn: 'root' })
export class SessionService {
  constructor(private _store: SessionStore, private _query: SessionQuery) {}

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
    this._store.update({
      deaths: [...currentDeaths, this.convertShorthand(score)]
    });
  }

  submitScore(score: number): void {
    const currentState = this._query.getValue();

    if (!currentState.currentStart) {
      this._store.update({ currentStart: this.convertShorthand(score) });
      return;
    }
  }
}
