import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button.component';

@NgModule({
  declarations: [LoadButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [LoadButtonComponent]
})
export class LoadButtonModule { }
