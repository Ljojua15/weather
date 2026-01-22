import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { OnpushGrandChild } from '../onpush-grand-child/onpush-grand-child';

@Component({
  selector: 'weather-onpush-child',
  imports: [OnpushGrandChild],
  templateUrl: './onpush-child.html',
  styleUrl: './onpush-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushChild implements OnInit {
  public onpush = 'onpush';
  private cdr = inject(ChangeDetectorRef);
  ngOnInit(): void {
    setTimeout(() => {
      this.onpush = 'onpush-sheicvala';
      this.cdr.markForCheck();
    }, 3000);
  }
}
