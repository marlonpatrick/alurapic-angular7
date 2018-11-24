import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../domain/token.service';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'authToken';

@Injectable()
export class TokenRequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
    console.log('new TokenRequestInterceptor');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenService.hasToken()) {

      const token = this.tokenService.getToken();

      req = req.clone({
        setHeaders: {
          'x-access-token': token
        }
      });
    }

    return next.handle(req);
  }
}
