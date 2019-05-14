import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { allowedKeys } from './allowed-keys.array';

@Component({
  selector: 'ssl-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  @Output() submitScore = new EventEmitter<string>();

  public score: string;

  constructor() {}

  ngOnInit() {}

  handleKeydown(e: KeyboardEvent) {
    if (!allowedKeys.includes(e.code)) {
      e.preventDefault();
      return;
    }
  }

  handleKeyup(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.submitScore.emit(this.score);
      this.score = null;
    }
  }
}
