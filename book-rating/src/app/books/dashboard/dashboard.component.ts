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
        isbn: '678',
        title: 'Buch3',
        author: 'Author3',
        rating: 4.9,
        description: 'desc3'
      },
      {
        isbn: '678546',
        title: 'Buch4',
        author: 'Author4',
        rating: 3.1,
        description: 'desc4'
      }
    ];
  }
}
