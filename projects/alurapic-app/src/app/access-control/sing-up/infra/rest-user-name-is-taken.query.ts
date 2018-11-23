import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNameIsTakenQuery } from '../domain/user-name-is-taken.query';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestUserNameIsTakenQuery extends UserNameIsTakenQuery {

    constructor(private http: HttpClient) {
        super();
    }

    execute(userName: string): Observable<boolean> {
        return this.http.get<boolean>(`${API_BASE_URL}/user/exists/${userName}`);
    }
}
