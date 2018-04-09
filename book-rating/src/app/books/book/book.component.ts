import { BookHelper } from './../../shared/book.helper';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-book',
  styles: ['.description { font-style: italic }'],
  templateUrl: './book.component.html'
})
export class BookComponent implements OnChanges {
  @Input() book: Book;
  @Output() bookChange: EventEmitter<Book> = new EventEmitter();

  ratingArray = [];

  ngOnChanges() {
    this.ratingArray = new Array(this.book.rating);
  }

  rateUp() {
    const newBook = BookHelper.rateUp(this.book);
    this.bookChange.emit(newBook);
  }

  rateDown() {
    const newBook = BookHelper.rateDown(this.book);
    this.bookChange.emit(newBook);
  }
}
