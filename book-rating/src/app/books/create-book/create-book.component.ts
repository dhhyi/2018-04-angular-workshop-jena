import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../../shared/book';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  mergeMap,
  delay,
  tap,
  concatMap,
} from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBookComponent implements OnInit {
  @Output() private bookChange = new EventEmitter<Book>();

  bookForm: FormGroup;

  constructor(private bookStoreService: BookStoreService) {}

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
    });

    this.bookForm.valueChanges
      .pipe(
        map((book: Book) => book.title),
        filter((title: string) => title.length > 2),
        distinctUntilChanged(),
        debounceTime(500),
        tap(console.log),
        switchMap((term: string) => this.bookStoreService.search(term)),
        map((books: Book[]) => JSON.stringify(books)),
      )
      .subscribe(console.log);
  }

  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const value = this.bookForm.value;
    const book: Book = {
      isbn: value.isbn,
      title: value.title,
      description: value.description,
    } as Book;

    this.bookChange.emit(book);

    this.bookForm.reset({ isbn: '', description: '', title: '' });
  }
}
