import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'First book', description: 'First book desc' },
      { id: 2, name: 'Second book', description: 'Second book desc' },
      { id: 3, name: 'Third book', description: 'Third book desc' },
      { id: 4, name: 'Fourth book', description: 'Fourth book desc' },
      { id: 5, name: 'Fifth book', description: 'Fourth book desc' },
    ];
    return {books};
  }
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
