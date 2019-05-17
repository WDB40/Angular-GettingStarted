import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClick: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClick.emit(`This rating ${this.rating} was clicked`);
  }
}
