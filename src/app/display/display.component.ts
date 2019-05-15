import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { SessionQuery, SessionService } from '@session/index';
import { AppSession } from '@session/models/app-session.model';

@Component({
  selector: 'ssl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() session: AppSession;
  @Output() readonly toggleSettings = new EventEmitter<void>();

  constructor(
    private _sessionQuery: SessionQuery,
    private _sessionService: SessionService
  ) {}

  ngOnInit() {}

  handleResetClick(): void {
    this._sessionService.reset();
  }

  handleSettingsClick(): void {
    this.toggleSettings.emit();
  }

  handleSubmitScore(e: string): void {
    this._sessionService.handleUserInput(e);
  }

  handleUndoClick(): void {
    this._sessionService.undo();
  }
}
