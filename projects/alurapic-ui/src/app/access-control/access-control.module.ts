import { NgModule } from '@angular/core';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sing-up/sign-up.module';

@NgModule({
  imports: [
    SignInModule,
    SignUpModule
  ]
})
export class AccessControlModule { }
