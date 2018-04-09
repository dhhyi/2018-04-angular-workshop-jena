import { Book } from './book';

export class BookHelper {
  static trackBook(index: number, item: Book) {
    return item.isbn;
  }

  static rateUpPossible(book: Book) {
    return book && book.rating && book.rating < 5;
  }

  static rateUp(book: Book) {
    if (!book || !book.rating) {
      throw new Error('book or rating invalid');
    }
    if (!this.rateUpPossible(book)) {
      throw new Error('cannot rate higher than 10');
    }
    return { ...book, rating: book.rating + 1 };
  }

  static rateDownPossible(book: Book) {
    return book && book.rating && book.rating > 1;
  }

  static rateDown(book: Book) {
    if (!book || !book.rating) {
      throw new Error('book or rating invalid');
    }
    if (!this.rateDownPossible(book)) {
      throw new Error('cannot rate lower than 10');
    }
    return { ...book, rating: book.rating - 1 };
  }
}
