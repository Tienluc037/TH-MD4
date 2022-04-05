import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }
getAllBook(){
  console.log(this.bookService.getAll());
  
  this.bookService.getAll().subscribe(res => {
    this.books = res;
  });
}

delete(id) {
  if (confirm('Are you sure')) {
      this.bookService.delete(id).subscribe(res => {
        if (res.status === 'error') {
          alert(res.message);
        }
          this.getAllBook();
      });
  }
}
}
