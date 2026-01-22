import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DefaultChild } from '../defoult-child/defoult-child';
import { OnpushChild } from '../onpush-child/onpush-child';

@Component({
  selector: 'weather-parent',
  imports: [DefaultChild, OnpushChild],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Parent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  parent = 'parent';
  ngOnInit(): void {
    setTimeout(() => {
      this.parent = 'parent-sheicvala';
    }, 2000);
  }
}
