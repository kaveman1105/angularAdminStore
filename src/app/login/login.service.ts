import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Login } from './login';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {

    private loginserviceUrl: string = 'application/admins';
    private loginCookie: string = 'loggedIn';
    constructor(
        private http: Http,
        private cookieService: CookieService
    ) { }

    login(): Promise<Login[]> {
        return this.http.get(this.loginserviceUrl)
            .toPromise()
            .then(response => response.json().data as Login[])
            .catch(error => console.log(error));
    }

    checkLogin(user: Login, admins: Login[]): boolean {
        let result = admins.find(x => x.password === user.password && x.userName === user.userName)
        return result ? true : false;
    }


    setLoginCookie() {
        this.cookieService.put(this.loginCookie, this.loginCookie);
    }

    removeLoginCookie() {
        this.cookieService.remove(this.loginCookie);
    }
}
