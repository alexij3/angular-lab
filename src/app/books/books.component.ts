import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  createBook(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) {
      return;
    }
    this.bookService.create({name, description} as Book).subscribe(book => );
  }

}
