import { Book } from './book';

export class BookHelper {
  static trackBook(index: number, item: Book) {
    return item.isbn;
  }

  static rateUp(book: Book) {
    return { ...book, rating: book.rating + 1 };
  }

  static rateDown(book: Book) {
    return { ...book, rating: book.rating - 1 };
  }
}
