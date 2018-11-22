import { Component, OnInit } from '@angular/core';
import { LoggedInUserService, User } from 'alurapic-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userObservable: Observable<User>;

  constructor(loggedInUserService: LoggedInUserService) {
    this.userObservable = loggedInUserService.getUser();
  }

  ngOnInit() {
  }

}
