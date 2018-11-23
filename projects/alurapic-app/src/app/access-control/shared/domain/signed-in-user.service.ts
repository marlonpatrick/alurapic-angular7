import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignedInUserService {

  private userSubject = new BehaviorSubject<User>(null);

  private userName: string;

  constructor(private tokenService: TokenService) {

    if (this.tokenService.hasToken()) {
      this.notify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);

    this.notify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  private notify() {

    const user = jwt_decode(this.tokenService.getToken()) as User;

    this.userName = user.name;

    this.userSubject.next(user);
  }

  removeToken() {
    this.tokenService.removeToken();

    this.userName = null;

    this.userSubject.next(null);
  }

  isSignedIn() {
    return this.tokenService.hasToken();
  }
}
