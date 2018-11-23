import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginProcessor } from '../domain/login.processor';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestLoginProcessor extends LoginProcessor {

  constructor(private http: HttpClient) {
    super();
  }

  execute(userName: string, password: string): Observable<string> {
    return this.http
      .post(`${API_BASE_URL}/user/login`,
        { userName: userName, password: password },
        { observe: 'response' })
      .pipe(map(res => res.headers.get('x-access-token')));
  }
}
