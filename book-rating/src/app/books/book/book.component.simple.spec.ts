import { Book } from './../../shared/book';
import { BookComponent } from './book.component';

describe('BookComponent (simple)', () => {
  let component: BookComponent;
  let newBook: Book;

  beforeEach(() => {
    component = new BookComponent();
    component.book = { rating: 3 } as Book;

    newBook = null;
    component.bookChange.subscribe(b => (newBook = b));
  });

  it('should emit a book with higher rating when rateUp is triggered', () => {
    expect(newBook).toBeFalsy();
    component.rateUp();
    expect(newBook).toBeTruthy();
    expect(newBook.rating).toBeGreaterThan(component.book.rating);
  });

  it('should emit a book with lower rating when rateDown is triggered', () => {
    expect(newBook).toBeFalsy();
    component.rateDown();
    expect(newBook).toBeTruthy();
    expect(newBook.rating).toBeLessThan(component.book.rating);
  });
});
