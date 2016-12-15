import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from '../customer/customer.module';
import { InventoryModule } from '../inventory/inventory.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CustomerModule,
    InventoryModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
