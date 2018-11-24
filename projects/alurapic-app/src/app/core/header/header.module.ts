import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignOutUseCase } from '../../access-control/sign-out/domain/sign-out.use-case';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  providers: [SignOutUseCase],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
