import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DisplayComponent } from './display.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DisplayComponent],
  providers: [],
  exports: [DisplayComponent]
})
export class DisplayModule {}
