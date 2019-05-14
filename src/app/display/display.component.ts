import { Component, OnInit } from '@angular/core';

import { SessionService } from '@session/session.service';

@Component({
  selector: 'ssl-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  constructor(private _sessionService: SessionService) {}

  ngOnInit() {}

  handleSubmitScore(e: string): void {
    this._sessionService.handleUserInput(e);
  }
}
