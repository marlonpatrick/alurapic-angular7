import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNameIsTakenQueryGateway } from '../domain/user-name-is-taken.query.gateway';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestUserNameIsTakenQuery extends UserNameIsTakenQueryGateway {

    constructor(private http: HttpClient) {
        super();
    }

    execute(userName: string): Observable<boolean> {
        return this.http.get<boolean>(`${API_BASE_URL}/user/exists/${userName}`);
    }
}
