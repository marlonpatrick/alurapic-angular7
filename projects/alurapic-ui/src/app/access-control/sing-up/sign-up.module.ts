import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPage } from './sign-up.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';

@NgModule({
  declarations: [SignUpPage],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ]
})
export class SignUpModule { }
