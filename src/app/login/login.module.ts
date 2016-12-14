import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, routedComponents } from './login-routing.module';

import { LoginService } from './login.service';

@NgModule({
    imports: [
        LoginRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        routedComponents
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }
