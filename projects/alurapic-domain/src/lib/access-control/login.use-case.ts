import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginProcessor } from './login.processor';


@Injectable()
export class LoginUseCase {

  constructor(private loginProcessor: LoginProcessor) { }

  execute(userName: string, password: string): Observable<Object> {

    if (userName == null || userName.trim().length <= 0) {
      return throwError('User name can\'t be empty.');
    }

    if (password == null || password.trim().length <= 0) {
      return throwError('Password can\'t be empty.');
    }

    return this.loginProcessor.execute(userName, password);
  }
}
