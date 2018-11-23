import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { SignUpPage } from './ui/sign-up.page';

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
