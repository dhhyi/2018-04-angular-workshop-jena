import { Injectable } from '@angular/core';
import { Book } from '../../shared/book';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookStoreService {
  private books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  private api = 'http://api.angular.schule';

  constructor(private http: HttpClient) {
    // this.books$ = new BehaviorSubject([
    //   {
    //     isbn: '12345',
    //     title: 'Buch1',
    //     author: 'Author1',
    //     rating: 2,
    //     description: 'desc1',
    //     price: 14.99
    //   },
    //   {
    //     isbn: '67890',
    //     title: 'Buch2',
    //     author: 'Author2',
    //     rating: 4,
    //     description: 'desc2',
    //     price: 13.65
    //   },
    //   {
    //     isbn: '6789',
    //     title: 'Buch3',
    //     author: 'Author3',
    //     rating: 1,
    //     description: 'desc3',
    //     price: 20
    //   }
    // ]);
    this.update();
  }

  private update() {
    this.getAll().subscribe(books => this.books$.next(books));
  }

  view(): Observable<Book[]> {
    // return this.books.sort((b1, b2) => b2.rating - b1.rating);
    return this.books$.pipe(map(books => books.sort((b1, b2) => b1.title.localeCompare(b2.title))));
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  search(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${searchTerm}`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  create(book: Book) {
    this.http.post(`${this.api}/book`, book).subscribe(() => {
      // this.books$.next([...this.books$.value, re]);
      this.update();
    });
  }

  changeBook(book: Book) {
    // const index = this.books.findIndex(b => b.isbn === book.isbn);
    // const newArray = [...this.books];
    // newArray[index] = book;
    // this.books = newArray;

    this.books$.next([...this.books$.value.filter(b => b.isbn !== book.isbn), book]);
  }
}
