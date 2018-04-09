import { BookHelper } from '../../shared/book.helper';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];
  trackBook = BookHelper.trackBook;

  constructor() {}

  ngOnInit() {
    this.books = [
      {
        isbn: '12345',
        title: 'Buch1',
        author: 'Author1',
        rating: 2,
        description: 'desc1'
      },
      {
        isbn: '67890',
        title: 'Buch2',
        author: 'Author2',
        rating: 4,
        description: 'desc2'
      },
      {
        isbn: '6789',
        title: 'Buch3',
        author: 'Author3',
        rating: 1,
        description: 'desc3'
      },
      {
        isbn: '678546',
        title: 'Buch4',
        author: 'Author4',
        rating: 3,
        description: 'desc4'
      }
    ];
  }

  get sortedView(): Book[] {
    // return this.books.sort((b1, b2) => b2.rating - b1.rating);
    return [...this.books].sort((b1, b2) => b1.title.localeCompare(b2.title));
  }

  bookChange(book: Book) {
    // const index = this.books.findIndex(b => b.isbn === book.isbn);
    // const newArray = [...this.books];
    // newArray[index] = book;
    // this.books = newArray;

    this.books = [...this.books.filter(b => b.isbn !== book.isbn), book];
  }
}
