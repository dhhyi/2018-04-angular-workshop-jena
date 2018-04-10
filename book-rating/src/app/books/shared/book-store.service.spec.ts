import { TestBed, inject } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';
import { Book } from '../../shared/book';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStoreService],
    });
    service = TestBed.get(BookStoreService);
    service.books$.next([
      {
        isbn: '1',
        title: 't1',
        rating: 3,
      },
      {
        isbn: '2',
        title: 't2',
        rating: 2,
      },
    ] as Book[]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 2 books', () => {
    service.view().subscribe(b => {
      expect(b.length).toEqual(2);
    });
  });

  describe('updating', () => {
    let books: Book[];

    beforeEach(() => {
      books = undefined;
      service.view().subscribe(b => {
        books = b;
      });
    });

    it('should update a book when requested', () => {
      expect(books[0].rating).toEqual(3);
      service.changeBook({
        isbn: '1',
        title: 't1',
        rating: 1,
      } as Book);
      expect(books[0].rating).toEqual(1);
    });
  });
});
