import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortablejsModule } from 'angular-sortablejs';

import { SharedModule } from '@shared/shared.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, SortablejsModule, SharedModule],
  declarations: [SettingsComponent],
  providers: [],
  exports: [SettingsComponent]
})
export class SettingsModule {}
