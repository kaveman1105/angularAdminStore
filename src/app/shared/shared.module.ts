import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPipe } from './card.pipe';
import { RatingModule } from './rating/rating.module';


@NgModule({
  imports: [
    CommonModule,
    RatingModule
  ],
  declarations: [
    CardPipe,
  ],
  exports: [
    CardPipe,
    RatingModule
  ]
})
export class SharedModule { }
