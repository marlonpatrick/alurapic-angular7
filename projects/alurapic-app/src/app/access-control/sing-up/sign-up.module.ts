import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { SignUpProcessorGateway } from './domain/sign-up.processor.gateway';
import { SignUpUseCase } from './domain/sign-up.use-case';
import { UserNameIsTakenQueryGateway } from './domain/user-name-is-taken.query.gateway';
import { RestSignUpProcessor } from './infra/rest-sign-up.processor';
import { RestUserNameIsTakenQuery } from './infra/rest-user-name-is-taken.query';
import { SignUpPage } from './ui/sign-up.page';
import { UserNameTakenAsyncValidator } from './ui/validators/user-name-taken.async.validator';

@NgModule({
  declarations: [SignUpPage],

  providers: [
    SignUpUseCase,
    UserNameTakenAsyncValidator,
    {provide: UserNameIsTakenQueryGateway, useClass: RestUserNameIsTakenQuery},
    {provide: SignUpProcessorGateway, useClass: RestSignUpProcessor}
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ]
})
export class SignUpModule { }
