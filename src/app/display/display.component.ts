import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { SessionQuery, SessionService } from '@session/index';
import { AppSession } from '@session/models/app-session.model';
import { Settings } from '../settings/state/models/settings.model';

@Component({
  selector: 'ssl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() session: AppSession;
  @Input() settings: Settings;
  @Output() readonly openSettings = new EventEmitter<void>();

  constructor(
    private _sessionQuery: SessionQuery,
    private _sessionService: SessionService
  ) {}

  ngOnInit() {}

  handleResetClick(): void {
    this._sessionService.reset();
  }

  handleSettingsClick(): void {
    this.openSettings.emit();
  }

  handleSubmitScore(e: string): void {
    this._sessionService.handleUserInput(
      e,
      this.settings.repeatingLevelCount,
      this.settings.scoreDivisor
    );
  }

  handleUndoClick(): void {
    this._sessionService.undo();
  }
}
