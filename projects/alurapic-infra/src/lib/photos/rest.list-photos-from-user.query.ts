import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPhotosFromUserQuery, Photo } from 'alurapic-core';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class RestListPhotosFromUserQuery extends ListPhotosFromUserQuery {

    constructor(private http: HttpClient) {
        super();
    }

    execute(userName: string, page: number): Observable<Photo[]> {
        const httpParams = new HttpParams().append('page', page.toString());

        return this.http.get<Photo[]>(`${API_BASE_URL}/${userName}/photos`, { params: httpParams});
    }
}
