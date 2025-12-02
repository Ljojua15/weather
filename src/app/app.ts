import { Component, signal } from '@angular/core';
import {Layout} from './components/layout/layout';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    Layout,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('weather');
}
