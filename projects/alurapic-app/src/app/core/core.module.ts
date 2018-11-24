import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [HeaderModule]
})
export class CoreModule { }
