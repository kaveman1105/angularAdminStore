import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Login } from './login';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

    private loginserviceUrl: string = 'application/admins';
    constructor(
        private http: Http
    ) { }

    login(): Observable<Login[]> {
        return this.http.get(this.loginserviceUrl)
            .map((res: Response) => res.json().data as Login[])
            .catch((error: any) => Observable.throw(error));
    }
}
