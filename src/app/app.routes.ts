import { Routes } from '@angular/router';
import {Layout} from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
      },
      {
        path: 'weather',
        loadComponent: () => import('./pages/weather/weather').then(m => m.Weather),
      },
      {
        path: 'currency',
        loadComponent: () => import('./pages/currency/currency').then(m => m.Currency),
      },
      {
        path: 'map',
        loadComponent: () => import('./pages/map/map').then(m => m.Map),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings),
      },
    ]
  }
];
