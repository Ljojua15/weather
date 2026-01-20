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

@Component({
  selector: 'weather-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scroll: ElementRef | undefined;
  private user = inject(Users);
  @ViewChild('sentinel', { static: true })
  sentinel!: ElementRef<HTMLDivElement>;

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

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      if (entry.isIntersecting) {
        this.loadMore();
      }
    });
    this.observer.observe(this.sentinel.nativeElement);
  }

  loadMore() {
    const currentLength = this.infiniteUsers().length;
    if (currentLength < this.masterData.length) {
      const nextBatch = this.masterData.slice(currentLength, currentLength + this.limit);
      this.infiniteUsers.update((prev) => [...prev, ...nextBatch]);
    }
  }

  ngOnDestroy() {
    this.observer.disconnect(); // 👈 აუცილებელია
  }
}
