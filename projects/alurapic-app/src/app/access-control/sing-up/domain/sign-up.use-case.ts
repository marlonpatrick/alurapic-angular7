import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedInUserService } from '../../shared/domain/logged-in-user.service';
import { NewUser } from './new-user';
import { SignUpProcessorGateway } from './sign-up.processor.gateway';


@Injectable()
export class SignUpUseCase {

  constructor(private signUpProcessor: SignUpProcessorGateway, private loggedInUserService: LoggedInUserService) { }

  execute(newUser: NewUser): Observable<Object> {

    // perform some business validation

    return this.signUpProcessor.execute(newUser);
  }
}
