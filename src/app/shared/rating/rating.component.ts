import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private starCount: number[] = [];
  @Input() rating: number;
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.rating; i++) {
      this.starCount.push(1);
    }
  }

}
