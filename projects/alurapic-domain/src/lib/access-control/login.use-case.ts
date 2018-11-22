import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginProcessor } from './login.processor';
import { LoggedInUserService } from './logged-in-user.service';


@Injectable()
export class LoginUseCase {

  constructor(private loginProcessor: LoginProcessor, private loggedInUserService: LoggedInUserService) { }

  execute(userName: string, password: string): Observable<Object> {

    if (userName == null || userName.trim().length <= 0) {
      return throwError('User name can\'t be empty.');
    }

    if (password == null || password.trim().length <= 0) {
      return throwError('Password can\'t be empty.');
    }

    return this.loginProcessor.execute(userName, password).pipe<string>(tap(token => this.loggedInUserService.setToken(token)));
  }
}
