import { Injectable } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import {
    CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private userProfile: UserProfileService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.userProfile.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }
}
