import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../shared/shared.module';
import { VideoEditComponent } from './video-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [InventoryComponent, VideoEditComponent]
})
export class InventoryModule { }
