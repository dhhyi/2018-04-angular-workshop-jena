import { BookHelper } from './book.helper';
import { Book } from './book';

describe('Book Helper', () => {
  describe('rateUpPossible', () => {
    it('should return true when rating is 4', () => {
      const book = { rating: 4 } as Book;
      expect(BookHelper.rateUpPossible(book)).toBeTruthy();
    });
    it('should return false when rating is 5', () => {
      const book = { rating: 5 } as Book;
      expect(BookHelper.rateUpPossible(book)).toBeFalsy();
    });
  });

  describe('rateUp', () => {
    it('should rate up a book', () => {
      const book = { rating: 3 } as Book;
      const newBook = BookHelper.rateUp(book);
      expect(book.rating).toEqual(3);
      expect(newBook.rating).toEqual(4);
    });

    it('should not rate up a book higher than 5 but throw', () => {
      const book = { rating: 5 } as Book;
      expect(() => BookHelper.rateUp(book)).toThrow();
    });

    it('should throw when book is undefined', () => {
      const book = undefined;
      expect(() => BookHelper.rateUp(book)).toThrow();
    });

    it('should throw when book rating is undefined', () => {
      const book = {} as Book;
      expect(() => BookHelper.rateUp(book)).toThrow();
    });
  });

  describe('rateDownPossible', () => {
    it('should return true when rating is 4', () => {
      const book = { rating: 4 } as Book;
      expect(BookHelper.rateDownPossible(book)).toBeTruthy();
    });
    it('should return false when rating is 1', () => {
      const book = { rating: 1 } as Book;
      expect(BookHelper.rateDownPossible(book)).toBeFalsy();
    });
  });

  describe('rateDown', () => {
    it('should rate down a book', () => {
      const book = { rating: 3 } as Book;
      const newBook = BookHelper.rateDown(book);
      expect(book.rating).toEqual(3);
      expect(newBook.rating).toEqual(2);
    });

    it('should not rate down a book lower than 1 but throw', () => {
      const book = { rating: 1 } as Book;
      expect(() => BookHelper.rateDown(book)).toThrow();
    });

    it('should throw when book is undefined', () => {
      const book = undefined;
      expect(() => BookHelper.rateDown(book)).toThrow();
    });

    it('should throw when book rating is undefined', () => {
      const book = {} as Book;
      expect(() => BookHelper.rateDown(book)).toThrow();
    });
  });
});
