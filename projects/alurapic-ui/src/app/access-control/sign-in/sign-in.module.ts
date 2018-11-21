import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginUseCase } from 'alurapic-domain';
import { AccessControlInfraModule } from 'alurapic-infra';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { SignInPage } from './sign-in.page';


@NgModule({
    declarations: [SignInPage],
    providers: [LoginUseCase],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageModule,
        AccessControlInfraModule
    ]
})
export class SignInModule { }
