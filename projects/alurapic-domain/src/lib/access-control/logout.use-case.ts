import { Injectable } from '@angular/core';
import { LoggedInUserService } from './logged-in-user.service';


/**
 * TODO: singleton? it's only used in header, then, perhaps could be singleton, therefore could be used in others parts as app evolve.
 */
@Injectable()
export class LogoutUseCase {

  constructor(private loggedInUserService: LoggedInUserService) { }

  execute() {
    this.loggedInUserService.removeToken();
  }
}
