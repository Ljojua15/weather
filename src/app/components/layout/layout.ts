import { Component } from '@angular/core';
import {LayoutHeader} from '../layout-header/layout-header';
import {RouterOutlet} from '@angular/router';
import {LayoutFooter} from '../layout-footer/layout-footer';

@Component({
  selector: 'weather-layout',
  imports: [
    LayoutHeader,
    RouterOutlet,
    LayoutFooter
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
