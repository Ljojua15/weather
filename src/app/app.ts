import { Component, signal } from '@angular/core';
import { Layout } from './components/layout/layout';
import { RouterOutlet } from '@angular/router';
import { NgRx } from '../Angular-NgRX/ng-rx/ng-rx';

@Component({
  selector: 'app-root',
  imports: [NgRx],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('weather');
}
