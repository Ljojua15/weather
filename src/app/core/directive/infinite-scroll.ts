import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[weatherInfiniteScroll]',
})
export class InfiniteScroll implements AfterViewInit, OnDestroy {
  @Output() addRow = new EventEmitter();

  private scrollObserver!: IntersectionObserver;
  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    this.scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.addRow.emit();
      }
    });

    this.scrollObserver.observe(this.el.nativeElement.querySelector('.sentinel'));
  }

  ngOnDestroy(): void {
    this.scrollObserver.disconnect();
  }
}
