import { NgModule } from '@angular/core';
import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlHomeModule } from './home/access-control-home.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sing-up/sign-up.module';

@NgModule({
  imports: [
    AccessControlHomeModule,
    SignInModule,
    SignUpModule,
    AccessControlRoutingModule
  ]
})
export class AccessControlModule { }
