import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AppSession } from './models/app-session.model';
import { LayoutWidget } from './models/layout-widget.enum';
import { DonkeyKong } from './models/predefined-settings/donkey-kong.model';

export function createInitialState(): AppSession {
  return {
    bonuses: [],
    currentPace: null,
    currentStart: null,
    deaths: [],
    levelScores: [],
    settings: DonkeyKong,
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
