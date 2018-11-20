import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ListPhotosFromUserQuery, Photo } from 'alurapic-domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Photo[]> {

  constructor(private listPhotosFromUserQuery: ListPhotosFromUserQuery) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

    const userName = route.params.userName;

    return this.listPhotosFromUserQuery.execute(userName, 1);
  }
}
