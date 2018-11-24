import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessControlSharedModule } from '../../access-control/shared/access-control-shared.module';
import { SignOutUseCase } from '../../access-control/sign-out/domain/sign-out.use-case';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  providers: [SignOutUseCase],
  imports: [
    CommonModule,
    RouterModule,
    AccessControlSharedModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
