import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [CommonModule, BooksRoutingModule],
  declarations: [BookComponent, DashboardComponent],
  exports: [DashboardComponent]
})
export class BooksModule {}
