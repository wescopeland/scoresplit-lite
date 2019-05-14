import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DisplayComponent } from './display.component';
import { DatapointComponent } from './datapoint/datapoint.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DisplayComponent, DatapointComponent],
  providers: [],
  exports: [DisplayComponent]
})
export class DisplayModule {}
