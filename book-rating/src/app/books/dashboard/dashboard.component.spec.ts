import { Book } from './../../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';
import { DashboardComponent } from './dashboard.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'br-book',
  template: `{{ book | json }}`,
})
class DummyBookComponent {
  @Input() book: Book;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    const bookStoreServiceMock = mock(BookStoreService);
    when(bookStoreServiceMock.view()).thenReturn(of([{}, {}] as Book[]));

    TestBed.configureTestingModule({
      declarations: [DashboardComponent, DummyBookComponent],
      providers: [{ provide: BookStoreService, useFactory: () => instance(bookStoreServiceMock) }],
    }).compileComponents();
  }));

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
    const bookElements = element.querySelectorAll('br-book');
    expect(bookElements).toBeTruthy();
    expect(bookElements.length).toEqual(2);
  });
});
