import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from './login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  private error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userProfile: UserProfileService,
    private cookieService: CookieService
  ) {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  OnSubmit(formValues) {
    this.error = '';
    console.log(this.form.valid);
    if (this.form.valid) {

      this.loginService.login()
        .then(results => {
          if (!this.loginService.checkLogin(formValues, results)) {
            this.error = 'Incorrect User Name/Password';
          } else {
            this.loginService.setLoginCookie();
            this.router.navigate(['dashboard']);
          }
        });
    }
  }

}
