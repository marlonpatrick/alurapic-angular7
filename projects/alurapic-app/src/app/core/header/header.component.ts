import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../access-control/shared/domain/user';
import { LoggedInUserService } from '../../access-control/shared/domain/logged-in-user.service';
import { SignOutUseCase } from '../../access-control/sign-out/domain/sign-out.use-case';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userObservable: Observable<User>;

  constructor(loggedInUserService: LoggedInUserService,
    private signOutUseCase: SignOutUseCase,
    private router: Router) {

    this.userObservable = loggedInUserService.getUser();
  }

  ngOnInit() {
  }

  signOut() {
    this.signOutUseCase.execute();
    this.router.navigate(['']);
  }
}
