import { Injectable } from '@angular/core';
import { SignedInUserService } from '../../shared/domain/signed-in-user.service';


/**
 * TODO: singleton? it's only used in header, then, perhaps could be singleton, therefore could be used in others parts as app evolve.
 */
@Injectable()
export class SignOutUseCase {

  constructor(private loggedInUserService: SignedInUserService) { }

  execute() {

    // perform some business logic / validation

    this.loggedInUserService.removeToken();
  }
}
