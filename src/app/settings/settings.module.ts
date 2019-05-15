import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SettingsComponent],
  providers: [],
  exports: [SettingsComponent]
})
export class SettingsModule {}
