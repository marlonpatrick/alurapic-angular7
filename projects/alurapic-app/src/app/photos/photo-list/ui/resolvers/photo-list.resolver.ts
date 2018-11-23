import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../../../shared/domain/photo';
import { ListPhotosFromUserQueryGateway } from '../../domain/list-photos-from-user.query.gateway';

// TODO: to me, this is not necessary singleton, when transform lazy modules, this sould bue loaded in this module
@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Photo[]> {

  constructor(private listPhotosFromUserQuery: ListPhotosFromUserQueryGateway) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

    const userName = route.params.userName;

    return this.listPhotosFromUserQuery.execute(userName, 1);
  }
}
