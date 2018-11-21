import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginProcessor, TokenService } from 'alurapic-domain';
import { LocalStorageTokenService } from './local-storage-token.service';
import { RestLoginProcessor } from './rest-login.processor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: LoginProcessor, useClass: RestLoginProcessor },
    { provide: TokenService, useClass: LocalStorageTokenService }
  ],
  exports: []
})
export class AccessControlInfraModule { }
