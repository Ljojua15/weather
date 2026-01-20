import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_URL } from './core/injection.token';
import { ENVIROMENT } from './core/enviroment';
import { authInterceptor } from './core/auth.interceptor';
import { CookieService } from 'ngx-cookie-service';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: API_URL, useValue: ENVIROMENT.prod },
    provideHttpClient(withInterceptors([authInterceptor])),
    CookieService,
  ],
};
