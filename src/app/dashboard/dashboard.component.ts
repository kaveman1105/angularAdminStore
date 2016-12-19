import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Router } from '@angular/router';
 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userProfile: UserProfileService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  logOut() {
    this.userProfile.clearLogin();
    this.router.navigate(['login']);
  }
}
