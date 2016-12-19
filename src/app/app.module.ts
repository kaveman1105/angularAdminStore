import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

/* In Memory data service */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { UserProfileService } from './user-profile.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    DashboardModule,
    ReactiveFormsModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
  ],
  providers: [
    appRoutingProviders,
    UserProfileService,
    AuthGuardService,
    CanDeactivateGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
