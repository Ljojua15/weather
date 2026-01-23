import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { Users } from '../../core/services/users';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map, retry, tap, timer } from 'rxjs';
import { InfiniteScroll } from '../../core/directive/infinite-scroll';
import { Login } from '../../auth-components/login/login';
import { Auth } from '../../core/services/auth';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { AbcPipe } from '../../core/pipes/abc-pipe';
import { ModifierService } from '../../resolution-modifiers/modifier-service';

import { API_URL } from '../../core/injection.token';
import { Parent } from '../../defout-onpush/parent/parent';
import { Dependency } from '../../dependency-providers/dependency/dependency';

@Component({
  selector: 'weather-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [FormsModule, InfiniteScroll, AbcPipe, Login, Parent, Dependency],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  providers: [ModifierService],
})
export class Layout implements OnInit {
  private user = inject(Users);
  public auth = inject(Auth);
  private cookieService = inject(CookieService);
  private masterData: any[] = [];
  private cdr = inject(ChangeDetectorRef);
  public searchName!: string;
  constructor() {}
  infiniteUsers = signal<any[]>([]);
  $searchName$ = signal<any>('');

  private url = inject(API_URL);

  public mo = inject(ModifierService);

  update() {
    this.mo.count.update((pre) => pre + 1);
  }

  private limit = 10;

  public abcClass = false;

  markFor = 'test';

  private obsSearchName$ = toObservable(this.$searchName$).pipe(
    debounceTime(500),
    distinctUntilChanged(),
  );

  private debouncedObservable$ = toSignal(this.obsSearchName$, { initialValue: '' });

  private observer!: IntersectionObserver;

  userData$ = toSignal(
    this.user.getUser$().pipe(
      retry({
        count: 3,
        delay: (error, retryCount) => {
          const waitTime = Math.pow(2, retryCount - 1) * 1000;
          return timer(waitTime);
        },
      }),

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
    console.log('OK');
  }

  private test() {
    let count = 0;

    return function () {
      count++;
      return count;
    };
  }

  ngOnInit(): void {
    const fixture = this.test();
  }

  usersArray = computed(() => {
    const searchTerm = this.debouncedObservable$().toLowerCase();

    if (searchTerm !== '') {
      return this.masterData.filter((user) => {
        if (user.name.toLowerCase().includes(searchTerm)) {
          this.abcClass = true;
        }

        return user.name.toLowerCase().includes(searchTerm);
      });
    }
    return this.infiniteUsers();
  });

  markForCheck() {
    this.markFor = 'sheicvala';
    setTimeout(() => {
      this.markFor = 'მესმედ';
      this.cdr.detach();
      console.log('ტექსტი შეიცვალა!');
      this.cdr.reattach();
      this.cdr.detectChanges();
      setTimeout(() => {
        this.markFor = 'მეოთხედდდდ';
        this.cdr.markForCheck();
      }, 4000);
    }, 2000);
  }
}
