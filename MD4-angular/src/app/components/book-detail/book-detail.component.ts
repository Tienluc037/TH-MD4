import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
books;
id = this.route.snapshot.paramMap.get('id');
  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetail(this.id)
  }

  getDetail(id){
    this.bookService.getById(id).subscribe(book=>{
      this.books = book;
    });
  }

}
