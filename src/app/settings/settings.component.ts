import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { AppSession } from '@session/models/app-session.model';
import { WidgetInstance } from '@session/models/widget-instance.model';

@Component({
  selector: 'ssl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() clonedSession: AppSession;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<AppSession>();

  constructor() {}

  ngOnInit() {}

  handleCancelClick(): void {
    this.cancel.emit();
  }

  handleSaveClick(): void {}

  handleVisibilityClick(widget: WidgetInstance): void {
    widget.isVisible = !widget.isVisible;
  }
}
