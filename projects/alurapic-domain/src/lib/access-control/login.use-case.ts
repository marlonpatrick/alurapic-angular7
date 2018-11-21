import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginProcessor } from './login.processor';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class LoginUseCase {

  constructor(private loginProcessor: LoginProcessor, private tokenService: TokenService) { }

  execute(userName: string, password: string): Observable<Object> {

    if (userName == null || userName.trim().length <= 0) {
      return throwError('User name can\'t be empty.');
    }

    if (password == null || password.trim().length <= 0) {
      return throwError('Password can\'t be empty.');
    }

    return this.loginProcessor.execute(userName, password).pipe<string>(tap(token => this.tokenService.setToken(token)));
  }
}
