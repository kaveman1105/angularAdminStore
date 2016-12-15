import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
