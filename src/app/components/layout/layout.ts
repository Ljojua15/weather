import { Component } from '@angular/core';
import { LayoutHeader } from '../layout-header/layout-header';
import { RouterOutlet } from '@angular/router';
import { LayoutFooter } from '../layout-footer/layout-footer';
import { MainTodo } from '../../todo/main-todo/main-todo';

@Component({
  selector: 'weather-layout',
  imports: [MainTodo],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
