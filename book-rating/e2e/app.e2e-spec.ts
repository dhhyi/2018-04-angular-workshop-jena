import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('book-rating App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('Book Rating');
  });

  it('should display 3 books', () => {
    expect(page.getNumberOfBooks()).toEqual(3);
  });

  it('should display book #1', () => {
    expect(browser.isElementPresent(page.getBook(0).title)).toBe(true);
    expect(page.getBook(0).title).toEqual('Buch1');
  });

  it('should not find book #4', () => {
    expect(browser.isElementPresent(page.getBook(3).title)).toBe(false);
  });

  it('should display rating of book #1', () => {
    expect(page.getBook(0).rating).toEqual(2);
  });

  it('should increase rating of book #1 when rate-up is clicked', () => {
    expect(page.getBook(0).rating).toEqual(2);
    page.getBook(0).rateUp.click();
    expect(page.getBook(0).rating).toEqual(3);
  });

  it('should decrease rating of book #2 when rate-down is clicked', () => {
    expect(page.getBook(1).rating).toEqual(4);
    page.getBook(1).rateDown.click();
    expect(page.getBook(1).rating).toEqual(3);
  });
});
