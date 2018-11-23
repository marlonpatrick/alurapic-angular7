import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { userNameValidator } from './validators/user-name.validator';
import { UserNameTakenAsyncValidator } from './validators/user-name-taken.async.validator';

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {

  pageForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNameTakenAsyncValidator: UserNameTakenAsyncValidator) { }

  ngOnInit() {

    this.pageForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          userNameValidator
        ],
        this.userNameTakenAsyncValidator.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16)
        ]
      ]
    });
  }
}
