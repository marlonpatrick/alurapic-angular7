import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';
import { SignInUseCase } from '../domain/sign-in.use-case';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss']
})
export class SignInPage implements OnInit {

  pageForm: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, private signInUseCase: SignInUseCase,
    private router: Router, private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.pageForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    const userName = this.pageForm.get('userName').value;
    const password = this.pageForm.get('password').value;

    this.signInUseCase.execute(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]),
        err => {
          console.log(err);

          if (this.platformDetectorService.isPlatformBrowser()) {
            this.userNameInput.nativeElement.focus();
          }

          this.pageForm.reset();
        }
      );
  }
}
