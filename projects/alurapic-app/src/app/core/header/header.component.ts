import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../access-control/shared/domain/user';
import { LoggedInUserService } from '../../access-control/shared/domain/logged-in-user.service';
import { LogoutUseCase } from '../../access-control/sign-out/domain/logout.use-case';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userObservable: Observable<User>;

  constructor(loggedInUserService: LoggedInUserService,
    private logoutUseCase: LogoutUseCase,
    private router: Router) {

    this.userObservable = loggedInUserService.getUser();
  }

  ngOnInit() {
  }

  logout() {
    this.logoutUseCase.execute();
    this.router.navigate(['']);
  }
}
