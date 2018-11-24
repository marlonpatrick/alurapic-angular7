import { NgModule } from '@angular/core';
import { TokenService } from './domain/token.service';
import { LocalStorageTokenService } from './infra/local-storage-token.service';

@NgModule({
  providers: [
    { provide: TokenService, useClass: LocalStorageTokenService }
  ]
})
export class AccessControlSharedModule { }
