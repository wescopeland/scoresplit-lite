import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { DisplayComponent } from './display.component';
import { DatapointComponent } from './datapoint/datapoint.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [DisplayComponent, DatapointComponent, UserInputComponent],
  providers: [],
  exports: [DisplayComponent]
})
export class DisplayModule {}
