import { Book } from './../../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'br-book',
  template: `{{ b | json }}`
})
class DummyBookComponent {
  @Input() b: Book;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent, DummyBookComponent]
        // schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.books = [{}, {}] as Book[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
