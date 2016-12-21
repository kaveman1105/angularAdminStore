import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Login } from './login';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';

@Injectable()
export class LoginService {

    private loginserviceUrl: string = 'application/admins';
    private loginCookie: string = 'loggedIn';
    constructor(
        private http: Http,
        private cookieService: CookieService
    ) { }

    checkLogin(user: Login, admins: Login[]): boolean {
        let result = admins.find(x => x.password === user.password && x.userName === user.userName);
        return result ? true : false;
    }


    setLoginCookie() {
        this.cookieService.put(this.loginCookie, this.loginCookie);
    }

    removeLoginCookie() {
        this.cookieService.remove(this.loginCookie);
    }

    authenticate(user: Login): Observable<boolean> {
        return this.http.get(this.loginserviceUrl)
            .map(admins => admins.json().data)
            .switchMap(admins => {
                let admin = admins.find(u => u.userName === user.userName && u.password === user.password);
                return Observable.of(admin !== undefined);
            });
    }
}
