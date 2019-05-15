import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { Settings } from './models/settings.model';
import { DonkeyKong } from './models/predefined-settings/donkey-kong.model';

export function createInitialState(): Settings {
  return DonkeyKong;
}

@Injectable()
@StoreConfig({ name: 'settings' })
export class SettingsStore extends Store<Settings> {
  constructor() {
    super(createInitialState());
  }
}
