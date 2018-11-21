import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginProcessor } from 'alurapic-domain';
import { RestLoginProcessor } from './rest-login.processor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: LoginProcessor, useClass: RestLoginProcessor }
  ],
  exports: []
})
export class AccessControlInfraModule { }
