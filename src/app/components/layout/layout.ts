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

@Component({
  selector: 'weather-layout',
  imports: [
    InfiniteScroll
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  @ViewChild('scrollContainer') scroll: ElementRef | undefined;
  private user = inject(Users);


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




}
