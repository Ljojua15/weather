import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { Users } from '../../core/services/users';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { InfiniteScroll } from '../../core/directive/infinite-scroll';
import { Login } from '../../auth-components/login/login';
import { Auth } from '../../core/services/auth';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'weather-layout',
  imports: [InfiniteScroll, Login, FormsModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  private user = inject(Users);
  public auth = inject(Auth);
  private cookieService = inject(CookieService);
  private masterData: any[] = [];

  public searchName!: string;
  constructor() {}
  infiniteUsers = signal<any[]>([]);
  $searchName$ = signal<any>('');

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
    this.cookieService.delete('access_token', '/');
    this.auth.isLoggedIn.set(false);
  }

  onModelChange(value: string) {
    this.$searchName$.set(value);
  }

  onSearch(value: string) {
    this.$searchName$.set(value);
  }

  ngOnInit(): void {}

  usersArray = computed(() => {
    const searchTerm = this.$searchName$().toLowerCase();

    if (searchTerm !== '') {
      console.log('ეძებთ:', searchTerm);

      return this.infiniteUsers().filter((user) => {
        const isMatch = user.name.toLowerCase().includes(searchTerm);
        console.log(`მომხმარებელი: ${user.name}, ემთხვევა: ${isMatch}`);
        return isMatch;
      });
    }
    return this.infiniteUsers();
  });
}
