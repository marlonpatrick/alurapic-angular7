import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedInUserService } from '../../../shared/domain/logged-in-user.service';

// TODO: to me, this is not necessary singleton, when transform lazy modules, this sould bue loaded in this module
@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private loggedInUserService: LoggedInUserService, private router: Router) { }

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
