import { NgModule } from '@angular/core';
import { TokenService } from './shared/domain/token.service';
import { LocalStorageTokenService } from './shared/infra/local-storage-token.service';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sing-up/sign-up.module';

@NgModule({

  providers: [
    { provide: TokenService, useClass: LocalStorageTokenService }
  ],

  imports: [
    SignInModule,
    SignUpModule
  ]
})
export class AccessControlModule { }
