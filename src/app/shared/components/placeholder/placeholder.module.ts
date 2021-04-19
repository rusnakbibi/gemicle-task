import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderComponent } from './placeholder.component';

@NgModule({
  declarations: [PlaceholderComponent],
  exports: [PlaceholderComponent],
  imports: [
    CommonModule
  ]
})
export class PlaceholderModule {}
