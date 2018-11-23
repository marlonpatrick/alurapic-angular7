import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignedInUserService } from '../../shared/domain/signed-in-user.service';
import { NewUser } from './new-user';
import { SignUpProcessorGateway } from './sign-up.processor.gateway';


@Injectable()
export class SignUpUseCase {

  constructor(private signUpProcessor: SignUpProcessorGateway, private loggedInUserService: SignedInUserService) { }

  execute(newUser: NewUser): Observable<Object> {

    // perform some business logic / validation

    return this.signUpProcessor.execute(newUser);
  }
}
