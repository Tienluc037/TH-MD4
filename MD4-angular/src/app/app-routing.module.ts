import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { MasterComponent } from './components/core/master/master.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/create',
    component: BookAddComponent,
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
  },
  {
    path: 'books/:id/detail',
    component: BookDetailComponent,
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
