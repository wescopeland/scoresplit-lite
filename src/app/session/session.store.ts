import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AppSession } from './models/app-session.model';

export function createInitialState(): AppSession {
  return {
    bonuses: [],
    currentPace: null,
    currentStart: null,
    deaths: [],
    levelScores: [],
    shorthandMultiplier: 1000,
    subtractionCache: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session', resettable: true })
export class SessionStore extends Store<AppSession> {
  constructor() {
    super(createInitialState());
  }
}
