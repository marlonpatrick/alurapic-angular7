import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LogoutUseCase } from '../access-control/sign-out/domain/logout.use-case';

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
