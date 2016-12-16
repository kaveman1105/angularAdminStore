import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from '../customer/customer.module';
import { InventoryModule } from '../inventory/inventory.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerModule,
    InventoryModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AdminService
  ]
})
export class DashboardModule { }
