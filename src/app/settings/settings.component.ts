import { Component, Input, OnInit } from '@angular/core';

import { AppSession } from '@session/models/app-session.model';

@Component({
  selector: 'ssl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() session: AppSession;

  constructor() {}

  ngOnInit() {}
}
