import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  createBook(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) {
      return;
    }
    this.bookService.create(({name, description} as Book)).subscribe(book => {
      window.alert(book);
      this.books.push(book);
    });
  }

}
