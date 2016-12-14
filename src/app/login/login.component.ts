import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  private error: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  OnSubmit(formValues) {
    console.log(formValues);
    if (!this.checkForms(formValues)) {
      return;
    }
  }

  checkForms(submission: Login): boolean {
    console.log(submission);

    return true;
  }
}
