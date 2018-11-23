import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserService, LogoutUseCase, User } from 'alurapic-domain';
import { Observable } from 'rxjs';

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
