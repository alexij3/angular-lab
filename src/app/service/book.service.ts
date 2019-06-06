import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Book} from '../model/book';
import {InMemoryDataService} from './in-memory-data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';

  constructor(private db: InMemoryDataService) {
  }

  getBooks(): Observable<Book[]> {
    return of(this.db.books);
  }

  create(book: Book): Observable<Book> {
    return this.db.createBook(book);
  }

  deleteBook(book: Book) {
    this.db.deleteBook(book);
  }
  updateBook(book: Book) {
    this.db.updateBook(book);
  }
}
