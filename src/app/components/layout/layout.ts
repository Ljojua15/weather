import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  ViewChild,
} from '@angular/core';
import {LayoutHeader} from '../layout-header/layout-header';
import {RouterOutlet} from '@angular/router';
import {LayoutFooter} from '../layout-footer/layout-footer';
import { Users } from '../../core/services/users';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { InfiniteScroll } from '../../core/directive/infinite-scroll';
import { Login } from '../../auth-components/login/login';
import { Auth } from '../../core/services/auth';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'weather-layout',
  imports: [InfiniteScroll, Login],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private user = inject(Users);
  public auth = inject(Auth);
  private cookieService = inject(CookieService);
  private masterData: any[] = [];

  infiniteUsers = signal<any[]>([]);

  private limit = 10;

  private observer!: IntersectionObserver;

  userData$ = toSignal(
    this.user.getUser$().pipe(
      tap((res: any) => {
        this.masterData = res;
        this.infiniteUsers.set(this.masterData.slice(0, this.limit));
      }),
    ),
  );

  loadMore() {
    const currentLength = this.infiniteUsers().length;
    if (currentLength < this.masterData.length) {
      const nextBatch = this.masterData.slice(currentLength, currentLength + this.limit);
      this.infiniteUsers.update((prev) => [...prev, ...nextBatch]);
    }
  }
  logout() {
    this.cookieService.delete('access_token','/');
    this.auth.isLoggedIn.set(false);
  }
}
