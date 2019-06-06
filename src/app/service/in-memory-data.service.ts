import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {Observable, of} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
    currentUser: User = {id: 1, displayName: "admin", email: "admin", password: "admin", role: "admin"};
    books: Book[] = [
      { id: 1, name: 'First book', description: 'First book desc', imageUrl: '../../assets/img/switzerland.jpg', lastViewed: null },
      { id: 2, name: 'Second book', description: 'Second book desc', imageUrl: '../../assets/img/switzerland.jpg', lastViewed: null },
      { id: 3, name: 'Third book', description: 'Third book desc', imageUrl: '../../assets/img/switzerland.jpg', lastViewed: null },
      { id: 4, name: 'Fourth book', description: 'Fourth book desc', imageUrl: '../../assets/img/switzerland.jpg', lastViewed: null },
      { id: 5, name: 'Fifth book', description: 'Fourth book desc', imageUrl: '../../assets/img/switzerland.jpg', lastViewed: null },
    ];

    createBook(book: Book): Observable<Book> {
      book.id = this.genId(this.books);
      this.books.push(book);
      return of(book);
    }
    getCurrentUser(): User {
      return this.currentUser;
    }

    deleteBook(book: Book): void {
      this.books = this.books.filter(h => h !== book);
    }

    updateBook(book: Book): void {
      const updateBook = this.books.find(this.findIndexToUpdate, book.id);
      const index = this.books.indexOf(updateBook);
      this.books[index] = book;

    }

  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
