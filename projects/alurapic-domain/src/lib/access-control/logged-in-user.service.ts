import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subject, BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  private userSubject = new BehaviorSubject<User>(null);

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

  private notify() {

    const user = jwt_decode(this.tokenService.getToken()) as User;

    this.userSubject.next(user);
  }
}
