import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';

import { SharedModule } from '@shared/shared.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, SortablejsModule, SharedModule],
  declarations: [SettingsComponent],
  providers: [],
  exports: [SettingsComponent]
})
export class SettingsModule {}
