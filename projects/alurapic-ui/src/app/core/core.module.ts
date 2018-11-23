import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LogoutUseCase } from 'alurapic-domain';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  providers: [LogoutUseCase],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
