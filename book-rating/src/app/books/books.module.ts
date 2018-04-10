import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { BookStoreService } from './shared/book-store.service';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
  declarations: [BookComponent, DashboardComponent, CreateBookComponent],
  exports: [DashboardComponent],
  providers: [BookStoreService],
})
export class BooksModule {}
