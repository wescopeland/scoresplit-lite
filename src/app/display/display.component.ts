import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SessionQuery, SessionService } from '@session/index';
import { AppSession } from '@session/models/app-session.model';

@Component({
  selector: 'ssl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public session$: Observable<AppSession>;

  constructor(
    private _sessionQuery: SessionQuery,
    private _sessionService: SessionService
  ) {}

  ngOnInit() {
    this.session$ = this._sessionQuery.select();
  }

  handleResetClick(): void {
    this._sessionService.reset();
  }

  handleSubmitScore(e: string): void {
    this._sessionService.handleUserInput(e);
  }

  handleUndoClick(): void {
    this._sessionService.undo();
  }
}
