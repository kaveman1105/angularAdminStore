import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class UserProfileService {

    private loginCookie: string = 'loggedIn';
    constructor(
        private cookieService: CookieService
    ) { }

    checkLoginCookie(): boolean {
        if (this.cookieService.get(this.loginCookie)) {
            return true;
        }
        return false;
    }

    clearLogin(){
        this.cookieService.remove(this.loginCookie);
    }
}
