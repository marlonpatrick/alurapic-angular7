import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggedInUserService } from '../../shared/domain/logged-in-user.service';
import { SignInProcessorGateway } from './sign-in.processor.gateway';


@Injectable()
export class SignInUseCase {

  constructor(private signInProcessor: SignInProcessorGateway, private loggedInUserService: LoggedInUserService) { }

  execute(userName: string, password: string): Observable<Object> {

    // perform some business validation

    return this.signInProcessor.execute(userName, password).pipe<string>(tap(token => this.loggedInUserService.setToken(token)));
  }
}
