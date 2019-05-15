import { Injectable } from '@angular/core';

import { Settings } from './models/settings.model';
import { SettingsStore } from './settings.store';

@Injectable()
export class SettingsService {
  constructor(private _store: SettingsStore) {}

  saveSettings(settings: Settings): void {
    this._store.update(settings);
  }
}
