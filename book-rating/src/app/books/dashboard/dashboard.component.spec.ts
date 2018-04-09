import { Book } from './../../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'br-book',
  template: `{{ book | json }}`
})
class DummyBookComponent {
  @Input() book: Book;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let element: HTMLElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent, DummyBookComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should display books', () => {
    fixture.detectChanges();
    // component.books = [{}, {}] as Book[];
    const bookElements = element.querySelectorAll('br-book');
    expect(bookElements).toBeTruthy();
    expect(bookElements.length).toEqual(4);
  });
});
