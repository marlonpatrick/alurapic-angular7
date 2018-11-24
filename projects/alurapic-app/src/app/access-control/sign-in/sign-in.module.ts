import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { SignInProcessorGateway } from './domain/sign-in.processor.gateway';
import { SignInUseCase } from './domain/sign-in.use-case';
import { RestSignInProcessor } from './infra/rest-sign-in.processor';
import { SignInPage } from './ui/sign-in.page';


@NgModule({
    declarations: [SignInPage],

    providers: [
        SignInUseCase,
        { provide: SignInProcessorGateway, useClass: RestSignInProcessor }
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
