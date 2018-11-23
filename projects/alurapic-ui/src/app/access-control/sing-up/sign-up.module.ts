import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPage } from './sign-up.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpPage],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // TODO: remove
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
