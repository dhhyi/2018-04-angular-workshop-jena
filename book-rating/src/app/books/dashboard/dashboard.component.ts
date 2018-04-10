import { BookHelper } from '../../shared/book.helper';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  trackBook = BookHelper.trackBook;

  constructor(private booksStoreService: BookStoreService) {}

  get sortedView(): Observable<Book[]> {
    return this.booksStoreService.view();
  }

  bookCreate(book: Book) {
    this.booksStoreService.create(book);
  }

  bookChange(book: Book) {
    this.booksStoreService.changeBook(book);
  }
}
