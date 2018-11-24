import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenService } from './domain/token.service';
import { LocalStorageTokenService } from './infra/local-storage-token.service';
import { TokenRequestInterceptor } from './infra/token-request.interceptor';

/* This module should be imported globally eagerly (AppModule or CoreModule) */
@NgModule({
  providers: [
    { provide: TokenService, useClass: LocalStorageTokenService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenRequestInterceptor, multi: true },
  ]
})
export class SignedInUserModule { }
