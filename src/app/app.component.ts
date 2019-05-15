import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';

import { AppSession } from './session/models/app-session.model';
import { SessionQuery } from './session/session.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  public session$: Observable<AppSession>;

  constructor(private _sessionQuery: SessionQuery) {}

  ngOnInit() {
    this.session$ = this._sessionQuery.select();
  }

  handleToggleSettings() {
    this.sidenav.toggle();
  }
}
