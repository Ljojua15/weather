import { Component } from '@angular/core';
import { LayoutHeader } from '../layout-header/layout-header';
import { RouterOutlet } from '@angular/router';
import { LayoutFooter } from '../layout-footer/layout-footer';
import { PaginationBoard } from '../pagination/pagination-board/pagination-board';

@Component({
  selector: 'weather-layout',
  imports: [PaginationBoard],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
