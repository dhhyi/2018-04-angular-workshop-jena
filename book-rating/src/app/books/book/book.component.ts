import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-book',
  styles: ['.description { font-style: italic }'],
  templateUrl: './book.component.html'
})
export class BookComponent implements OnChanges {
  @Input() book: Book;

  ratingArray = [];
  rating: number;

  ngOnChanges() {
    this.rating = Math.round(this.book.rating);
    this.ratingArray = new Array(this.rating);
  }
}
