import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AppSession } from './models/app-session.model';

export function createInitialState(): AppSession {
  return {
    currentNonStartLevel: null,
    currentBonuses: null,
    currentDeaths: null,
    currentPace: null,
    currentStart: null,
    nonStartLevelCount: 17
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<AppSession> {
  constructor() {
    super(createInitialState());
  }
}
