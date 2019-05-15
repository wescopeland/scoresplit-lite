import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Settings } from '@session/models/settings.model';
import { WidgetInstance } from '@session/models/widget-instance.model';

@Component({
  selector: 'ssl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() clonedSessionSettings: Settings;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Settings>();

  constructor() {}

  ngOnInit() {}

  handleCancelClick(): void {
    this.cancel.emit();
  }

  handleSaveClick(): void {
    this.save.emit(this.clonedSessionSettings);
  }

  handleVisibilityClick(widget: WidgetInstance): void {
    widget.isVisible = !widget.isVisible;
  }
}
