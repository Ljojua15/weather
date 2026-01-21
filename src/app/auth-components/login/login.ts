import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../core/services/auth';
import { CookieService } from 'ngx-cookie-service';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'weather-login',
  imports: [FormsModule, CdkCopyToClipboard],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  // https://dummyjson.com/docs/auth#auth-login
  public auth = inject(Auth);
  public cookieService = inject(CookieService);

  loginData = {
    username: '',
    password: '',
    expiresInMins: 30,
  };

  // username: 'emilys',
  // password: 'emilyspass',
  // expiresInMins: 30,

  submitLogin() {
    this.auth.logIn(this.loginData as any).subscribe((res: any) => {
      if (res.email) {
        this.cookieService.set('access_token', res.accessToken, 1, '/');

        this.auth.isLoggedIn.set(true);
      }
    });
  }
}
