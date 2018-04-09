import { Book } from './../../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spy, verify } from 'ts-mockito';
import { BookComponent } from './book.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let element: HTMLElement;
  let book: Book;

  describe('normal configuration', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          declarations: [BookComponent]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(BookComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      book = {
        title: 'booktitle',
        description: 'bookdesc',
        rating: 3
      } as Book;
      component.book = book;
    });

    it('should create', () => {
      expect(() => fixture.detectChanges()).not.toThrow();
      expect(component).toBeTruthy();
    });

    it('should display the description', () => {
      fixture.detectChanges();
      const descElem = element.querySelector('p.description');
      expect(descElem).toBeTruthy();
      expect(descElem.textContent).toEqual(book.description);
    });

    it('should display the title', () => {
      fixture.detectChanges();
      const titleElem = element.querySelector('span.title');
      expect(titleElem).toBeTruthy();
      expect(titleElem.textContent).toEqual(book.title);
    });

    it('should display the rating cats', () => {
      component.ngOnChanges();
      fixture.detectChanges();
      const ratingCats = element.querySelectorAll('img.rating');
      expect(ratingCats).toBeTruthy();
      expect(ratingCats.length).toEqual(3);
    });

    it('should display rating buttons', () => {
      fixture.detectChanges();
      expect(element.querySelector('button.testing-rate-up')).toBeTruthy();
      expect(element.querySelector('button.testing-rate-down')).toBeTruthy();
    });

    it('should call rateUp when rate-up button is clicked', () => {
      fixture.detectChanges();
      const compSpy = spy(component);

      verify(compSpy.rateUp()).never();

      const rateUpButton = element.querySelector('button.testing-rate-up') as HTMLButtonElement;
      rateUpButton.click();

      verify(compSpy.rateUp()).once();
    });

    it('should call rateDown when rate-down button is clicked', () => {
      fixture.detectChanges();
      const compSpy = spy(component);

      verify(compSpy.rateDown()).never();

      const rateDownButton = element.querySelector('button.testing-rate-down') as HTMLButtonElement;
      rateDownButton.click();

      verify(compSpy.rateDown()).once();
    });
  });

  describe('default change detection', () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          declarations: [BookComponent]
        })
          .overrideComponent(BookComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
          })
          .compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(BookComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      book = {
        title: 'booktitle',
        description: 'bookdesc',
        rating: 3
      } as Book;
      component.book = book;
    });

    it('should update the rating cats accordingly', () => {
      component.ngOnChanges();
      fixture.detectChanges();
      expect(element.querySelectorAll('img.rating').length).toEqual(3);

      component.book = { ...book, rating: 5 };
      component.ngOnChanges();
      fixture.detectChanges();
      expect(element.querySelectorAll('img.rating').length).toEqual(5);
    });
  });
});
