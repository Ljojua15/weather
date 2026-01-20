import { Inject, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../injection.token';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loginUrl = 'https://reqres.in';

  private http = inject(HttpClient);
  private cookieService = inject(CookieService);
  constructor(@Inject(API_URL) private apiUrl: string) {}
  isLoggedIn = signal<boolean>(this.cookieService.check('access_token'));

  public logIn(loginData: any) {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}
