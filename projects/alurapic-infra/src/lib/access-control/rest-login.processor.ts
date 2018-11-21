import { Injectable } from '@angular/core';
import { LoginProcessor } from 'alurapic-domain';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestLoginProcessor extends LoginProcessor {

  constructor(private http: HttpClient) {
    super();
  }

  execute(userName: string, password: string): Observable<Object> {
    return this.http.post(`${API_BASE_URL}/user/login`, { userName: userName, password: password });
  }
}
