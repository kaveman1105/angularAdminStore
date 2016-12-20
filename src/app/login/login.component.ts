import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserProfileService } from '../user-profile.service';
import { LoginService } from './login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Login } from './login';

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

  authenticate(formValues) {
    this.error = '';
    if (this.form.valid) {
      this.loginService.authenticate(formValues)
        .subscribe(res => {
          if (res) {
            this.loginService.setLoginCookie();
            this.router.navigate(['dashboard']);
          } else {
            this.error = 'Incorrect User Name/Password';
          }
        }, err => this.error = 'server error: ' + err);
    }
  }

}
