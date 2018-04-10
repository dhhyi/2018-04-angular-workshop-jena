import { browser, $, $$, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return $('br-root h1').getText();
  }

  getNumberOfBooks() {
    return $$('br-book').count();
  }

  getBook(index: number) {
    const book = $$('br-book').get(index);
    return {
      title: book.$('span.title').getText(),
      rating: book.$$('img.rating').count(),
      rateUp: book.$('button.testing-rate-up'),
      rateDown: book.$('button.testing-rate-down'),
    };
  }
}
