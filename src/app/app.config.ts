import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './ngrx/store/reducers/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './ngrx/store/effects/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ todos: todoReducer }),
    provideEffects([TodoEffects]),
  ],
};
