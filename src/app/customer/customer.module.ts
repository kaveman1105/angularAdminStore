import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerEditComponent } from './customer-edit.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapsService } from '../shared/google-maps.service';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVtw0vIY0eP7n8sizH0x6Y6_cZbD1gV1A'
    })
  ],
  declarations: [CustomerComponent, CustomerEditComponent],
  providers: [
    GoogleMapsService,
    GoogleMapsAPIWrapper
  ]
})
export class CustomerModule { }
