import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { AppSession } from './models/app-session.model';
import { LayoutWidget } from './models/layout-widget.enum';

export function createInitialState(): AppSession {
  return {
    bonuses: [],
    currentPace: null,
    currentStart: null,
    deaths: [],
    levelScores: [],
    nonStartLevelCount: 17,
    settings: {
      layout: {
        widgets: [
          {
            widget: LayoutWidget.Pace,
            isVisible: true,
            labelOverride: null
          },
          {
            widget: LayoutWidget.PreviousLevel,
            isVisible: true,
            labelOverride: null
          },
          {
            widget: LayoutWidget.LevelAverage,
            isVisible: true,
            labelOverride: null
          },
          {
            widget: LayoutWidget.Start,
            isVisible: true,
            labelOverride: null
          },
          {
            widget: LayoutWidget.DeathPoints,
            isVisible: true,
            labelOverride: null
          },
          {
            widget: LayoutWidget.BonusPoints,
            isVisible: true,
            labelOverride: null
          }
        ]
      }
    },
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
