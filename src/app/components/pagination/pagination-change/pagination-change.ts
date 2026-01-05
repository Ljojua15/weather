import { Component, inject } from '@angular/core';
import { Pagination } from '../pagination';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'weather-pagination-change',
  imports: [NgForOf],
  templateUrl: './pagination-change.html',
  styleUrl: './pagination-change.scss',
})
export class PaginationChange {
  public paginationService = inject(Pagination);
}
