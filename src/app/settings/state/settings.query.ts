import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { Settings } from './models/settings.model';
import { SettingsStore } from './settings.store';

@Injectable()
export class SettingsQuery extends Query<Settings> {
  constructor(protected store: SettingsStore) {
    super(store);
  }
}
