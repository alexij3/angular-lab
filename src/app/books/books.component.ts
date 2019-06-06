import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../model/book";
import {InMemoryDataService} from '../service/in-memory-data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  bookId: number;

  constructor(private bookService: BookService,
              private db: InMemoryDataService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  createBook(name: string, description: string, imageUrl: string): void {
    name = name.trim();
    description = description.trim();
    imageUrl = imageUrl.trim();
    if (!name || !description || !imageUrl) {
      return;
    }
    this.bookService.create(({name, description, imageUrl} as Book)).subscribe(book => {
      this.books.push(book);
    });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book);
    this.getBooks();
  }
  saveBookId(id: number) {
    this.bookId = id;
  }
  updateBook(newName: string, newDesc: string, newImageUrl: string) {
    const book: Book = {id: this.bookId, name: newName, description: newDesc, imageUrl: newImageUrl } as Book;
    this.bookService.updateBook(book);
    this.getBooks();
  }

}
