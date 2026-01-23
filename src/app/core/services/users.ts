import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private apiUrl = 'http://localhost:3000';

  private loginUrl = 'https://techgazzeta.org';

  private http = inject(HttpClient);

  getUser$() {
    return this.http.get(`${this.apiUrl}/user`);
  }

  public logIn(loginData: any) {
    return this.http.post(`${this.loginUrl}/iam/auth/login`, loginData);
  }
}
