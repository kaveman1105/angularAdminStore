import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Login } from './login';
import { LoginService } from './login.service';

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
    private loginService: LoginService
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  OnSubmit(formValues) {
    this.error = '';
    if (!this.checkForms(formValues)) {
      this.error = 'Both fields are required!';
      return;
    }
  }

  checkForms(submission: Login): boolean {
    if (submission.password && submission.username) {
      return true;
    }
    return false;
  }
}