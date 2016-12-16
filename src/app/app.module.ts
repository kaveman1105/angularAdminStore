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

import { UserProfileService } from './user-profile.service'

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
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
