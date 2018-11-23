import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggedInUserService } from '../../shared/domain/logged-in-user.service';
import { LoginProcessor } from './login.processor';


@Injectable()
export class LoginUseCase {

  constructor(private loginProcessor: LoginProcessor, private loggedInUserService: LoggedInUserService) { }

  execute(userName: string, password: string): Observable<Object> {

    this.validate(userName, password);

    return this.loginProcessor.execute(userName, password).pipe<string>(tap(token => this.loggedInUserService.setToken(token)));
  }

  private validate(userName: string, password: string) {

    if (userName == null || userName.trim().length <= 0) {
      return throwError('User name can\'t be empty.');
    }

    if (password == null || password.trim().length <= 0) {
      return throwError('Password can\'t be empty.');
    }
  }
}
