import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Book } from '../../shared/book';
import { pluck, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  isbn$: Observable<string>;

  constructor(
    private router: ActivatedRoute,
    private service: BookStoreService,
  ) {}

  ngOnInit(): void {
    this.isbn$ = this.router.params.pipe(map(params => params.isbn));
    this.book$ = this.isbn$.pipe(
      switchMap(isbn => this.service.getSingle(isbn)),
    );
  }
}
