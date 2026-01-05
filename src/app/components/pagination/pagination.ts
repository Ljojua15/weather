import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { Book } from './books.model';

@Injectable({
  providedIn: 'root',
})
export class Pagination {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/book';

  public pageSize = 10;
  public $currentPage = new BehaviorSubject<number>(1);

  public getAllBooks(page: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}?_page=${page}&_limit=${this.pageSize}`);
  }

  public books$ = this.$currentPage.pipe(
    switchMap((page) => this.getAllBooks(page).pipe(tap(console.log))),
  );

  public nextPage() {
    this.pageSize += 10;
    this.$currentPage.next(this.$currentPage.value + 1);
  }

  public prevPage() {
    if (this.$currentPage.value > 1) {
      this.pageSize -= 10;
      this.$currentPage.next(this.$currentPage.value - 1);
    }
  }
}
