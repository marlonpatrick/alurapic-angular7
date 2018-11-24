import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { SignUpProcessorGateway } from './sign-up.processor.gateway';


@Injectable()
export class SignUpUseCase {

  constructor(private signUpProcessor: SignUpProcessorGateway) { }

  execute(newUser: NewUser): Observable<Object> {

    // perform some business logic / validation

    return this.signUpProcessor.execute(newUser);
  }
}
