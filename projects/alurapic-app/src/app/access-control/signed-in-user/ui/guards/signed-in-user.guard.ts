import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SignedInUserService } from '../../domain/signed-in-user.service';

// TODO: to me, this is not necessary singleton, when transform lazy modules, this sould bue loaded in this module
@Injectable({
  providedIn: 'root'
})
export class SignedInUserGuard implements CanActivate {

  constructor(private signedInUserService: SignedInUserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.signedInUserService.isSignedIn()) {
      this.router.navigate(['user', this.signedInUserService.getUserName()]);
      return false;
    }

    return true;
  }
}
