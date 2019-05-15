import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { cloneDeep } from 'lodash';

import { AppSession } from './session/models/app-session.model';
import { SessionQuery, SessionService } from './session/index';
import { Settings } from './settings/state/models/settings.model';
import { SettingsQuery, SettingsService } from './settings/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  public clonedSessionSettings: Settings;
  public session$: Observable<AppSession>;
  public settings$: Observable<Settings>;

  constructor(
    private _sessionQuery: SessionQuery,
    private _sessionService: SessionService,
    private _settingsQuery: SettingsQuery,
    private _settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.session$ = this._sessionQuery.select();
    this.settings$ = this._settingsQuery.select();
  }

  handleCancelSettings(): void {
    this.sidenav.close();
  }

  handleOpenSettings() {
    this.clonedSessionSettings = cloneDeep(this._settingsQuery.getValue());

    this.sidenav.toggle();
  }

  handleSettingsSave(newSettings: Settings): void {
    this._settingsService.saveSettings(newSettings);
    this.sidenav.toggle();
  }
}
