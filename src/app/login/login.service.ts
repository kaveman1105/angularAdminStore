import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Login} from './login';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(
        private http: Http
    ) { }

    // login(submission: Login): Observable<boolean>{
    //     return this.http.get()
    // }
}
