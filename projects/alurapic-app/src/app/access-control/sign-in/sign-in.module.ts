import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { LoginProcessor } from './domain/login.processor';
import { LoginUseCase } from './domain/login.use-case';
import { RestLoginProcessor } from './infra/rest-login.processor';
import { SignInPage } from './ui/sign-in.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [SignInPage],

    providers: [
        LoginUseCase,
        { provide: LoginProcessor, useClass: RestLoginProcessor }
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationMessageModule
    ]
})
export class SignInModule { }
