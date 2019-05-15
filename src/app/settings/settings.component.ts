import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material';

import { Settings } from '@session/models/settings.model';
import { WidgetInstance } from '@session/models/widget-instance.model';
import {
  DonkeyKong,
  DonkeyKongJr,
  DonkeyKongRemix
} from '@session/models/predefined-settings';

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

  handleChoosePredefinedLayout(e: MatSelectChange): void {
    if (e.value === 'donkeyKong' || e.value === 'crazyKong') {
      this.clonedSessionSettings = DonkeyKong;
    } else if (e.value === 'donkeyKongJr') {
      this.clonedSessionSettings = DonkeyKongJr;
    } else if (e.value === 'donkeyKongRemix') {
      this.clonedSessionSettings = DonkeyKongRemix;
    }
  }

  handleSaveClick(): void {
    this.save.emit(this.clonedSessionSettings);
  }

  handleVisibilityClick(widget: WidgetInstance): void {
    widget.isVisible = !widget.isVisible;
  }
}
