import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { LoggedInUserService } from 'alurapic-domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private loggedInUserService: LoggedInUserService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.loggedInUserService.isLogged()) {
      this.router.navigate(['user', this.loggedInUserService.getUserName()]);
      return false;
    }

    return true;
  }
}
