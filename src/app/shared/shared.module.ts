import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { materialDependencies } from './material-dependencies.array';

@NgModule({
  imports: [CommonModule, ...materialDependencies],
  declarations: [],
  providers: [],
  exports: [...materialDependencies]
})
export class SharedModule {}
