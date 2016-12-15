import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPipe } from './card.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardPipe
  ],
  exports: [
    CardPipe
  ]
})
export class SharedModule { }
