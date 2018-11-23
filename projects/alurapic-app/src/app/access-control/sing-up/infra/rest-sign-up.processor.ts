import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../domain/new-user';
import { SignUpProcessorGateway } from '../domain/sign-up.processor.gateway';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class RestSignUpProcessor extends SignUpProcessorGateway {

  constructor(private http: HttpClient) {
    super();
  }

  execute(newUser: NewUser): Observable<Object> {
    return this.http
      .post(`${API_BASE_URL}/user/signup`, newUser);
  }
}
