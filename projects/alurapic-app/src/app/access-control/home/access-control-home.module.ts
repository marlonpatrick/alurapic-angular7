import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlHomePage } from './ui/access-control-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccessControlHomePage],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AccessControlHomeModule { }
