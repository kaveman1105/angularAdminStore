import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
@NgModule({
    imports: [
        LoginRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [ routedComponents]
})
export class LoginModule { }
