import { NgModule } from '@angular/core';
import { TokenService } from './shared/domain/token.service';
import { LocalStorageTokenService } from './shared/infra/local-storage-token.service';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sing-up/sign-up.module';
import { AccessControlHomeModule } from './home/home.module';

@NgModule({

  providers: [
    { provide: TokenService, useClass: LocalStorageTokenService }
  ],

  imports: [
    AccessControlHomeModule,
    SignInModule,
    SignUpModule
  ]
})
export class AccessControlModule { }
