import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CustomerComponent } from './customer/customer.component';
import { VideoEditComponent } from './inventory/video-edit.component';
import { CustomerEditComponent } from './customer/customer-edit.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'inventory', pathMatch: 'full' },
      { path: 'inventory', component: InventoryComponent },
      { path: 'inventory/:id', component: VideoEditComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'customer/:id', component: CustomerEditComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
