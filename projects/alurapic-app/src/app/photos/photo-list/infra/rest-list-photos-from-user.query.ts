import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPhotosFromUserQueryGateway } from '../domain/list-photos-from-user.query.gateway';
import { Photo } from '../../shared/domain/photo';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestListPhotosFromUserQuery extends ListPhotosFromUserQueryGateway {

    constructor(private http: HttpClient) {
        super();
    }

    execute(userName: string, page: number): Observable<Photo[]> {
        const httpParams = new HttpParams().append('page', page.toString());

        return this.http.get<Photo[]>(`${API_BASE_URL}/${userName}/photos`, { params: httpParams});
    }
}
