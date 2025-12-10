import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './books.model';

@Injectable({
  providedIn: 'root',
})
export class Pagination {
  private http = inject(HttpClient);

  private url = 'http://localhost:3000';

  public pageSize = 10;
  public $currentPage = new BehaviorSubject<number>(1);

  public getAllBooks(page: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/book?page=${page}&limit=${this.pageSize}`);
  }
}
