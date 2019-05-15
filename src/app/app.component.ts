import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { cloneDeep } from 'lodash';

import { AppSession } from './session/models/app-session.model';
import { Settings } from './session/models/settings.model';
import { SessionQuery } from './session/session.query';
import { SessionService } from './session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  public clonedSessionSettings: Settings;
  public session$: Observable<AppSession>;

  constructor(
    private _sessionQuery: SessionQuery,
    private _sessionService: SessionService
  ) {}

  ngOnInit() {
    this.session$ = this._sessionQuery.select();
  }

  handleCancelSettings(): void {
    this.sidenav.close();
  }

  handleOpenSettings() {
    this.clonedSessionSettings = cloneDeep(
      this._sessionQuery.getValue().settings
    );

    this.sidenav.toggle();
  }

  handleSettingsSave(newSettings: Settings): void {
    this._sessionService.saveSettings(newSettings);
    this.sidenav.toggle();
  }
}
