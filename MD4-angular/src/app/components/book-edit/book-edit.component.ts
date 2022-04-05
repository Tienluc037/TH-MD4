import { BookService } from './../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private bookService: BookService,
              private fb: FormBuilder,
              private router: Router,
      ) {
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe((book) => {
      this.editBookForm = this.fb.group({
        id:[book.id],
        title: [book.title],
        author: [book.author],
        description: [book.description]
      });
    });
  }

 
editBook(){
  let data = this.editBookForm.value;
  this.bookService.edit(data,data.id).subscribe(()=>{
    alert('update success');
    this.router.navigate(['books']);
  });
}

}
