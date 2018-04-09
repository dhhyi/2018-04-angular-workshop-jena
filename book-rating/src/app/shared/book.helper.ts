import { Book } from './book';

export class BookHelper {
  static trackBook(index: number, item: Book) {
    return item.isbn;
  }
}
