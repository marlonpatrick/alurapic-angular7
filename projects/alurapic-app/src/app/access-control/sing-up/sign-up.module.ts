import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { SignUpPage } from './ui/sign-up.page';
import { UserNameIsTakenQuery } from './domain/user-name-is-taken.query';
import { RestUserNameIsTakenQuery } from './infra/rest-user-name-is-taken.query';
import { UserNameTakenAsyncValidator } from './ui/validators/user-name-taken.async.validator';

@NgModule({
  declarations: [SignUpPage],

  providers: [
    UserNameTakenAsyncValidator,
    {provide: UserNameIsTakenQuery, useClass: RestUserNameIsTakenQuery}
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ]
})
export class SignUpModule { }
