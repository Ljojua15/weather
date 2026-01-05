import { Component, inject } from '@angular/core';
import { PaginationChange } from '../pagination-change/pagination-change';
import { Pagination } from '../pagination';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'weather-pagination-board',
  imports: [PaginationChange, AsyncPipe],
  templateUrl: './pagination-board.html',
  styleUrl: './pagination-board.scss',
})
export class PaginationBoard {
  public paginationService = inject(Pagination);

  public books$ = this.paginationService.books$;
}
