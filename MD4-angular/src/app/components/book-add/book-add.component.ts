import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formAddBook?: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      id:[''],
      title: [''],
      author: [''],
      description: ['']

    })
  }

  submit(){
    let data = this.formAddBook.value;
    this.bookService.createBook(data).subscribe(res=>{
    
        this.router.navigate(['books'])
      alert("create success");
    });
  }

}
