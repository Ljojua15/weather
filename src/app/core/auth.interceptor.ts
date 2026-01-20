import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_URL } from './injection.token';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const apiUrl = inject(API_URL); // ჩვენი ტოკენი
  const token = cookieService.get('access_token'); // აქ ინახება შენი JWT


  // 1. ვამოწმებთ, რომ მოთხოვნა ნამდვილად ჩვენს API-ზე მიდის
  const isApiRequest = req.url.startsWith(apiUrl);

  if (token && isApiRequest) {
    // 2. ვაკეთებთ მოთხოვნის კლონირებას და ვამატებთ Header-ს
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    // 3. ვატანთ შეცვლილ მოთხოვნას

    console.log('authReq', authReq);
    return next(authReq);
  }

  // თუ ტოკენი არ გვაქვს, მოთხოვნა ჩვეულებრივად აგრძელებს გზას
  return next(req);
};
