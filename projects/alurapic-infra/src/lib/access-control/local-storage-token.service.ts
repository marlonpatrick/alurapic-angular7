import { Injectable } from '@angular/core';
import { TokenService } from 'alurapic-domain';

const TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTokenService extends TokenService {

  getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  hasToken() {
    return !!this.getToken();
  }

  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
