import { Book } from './../../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

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
    component.book = {} as Book;
  });

  it('should create', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
    expect(component).toBeTruthy();
  });
});
