import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { DefoultGrandChild } from '../defoult-grand-child/defoult-grand-child';

@Component({
  selector: 'weather-defoult-child',
  imports: [DefoultGrandChild],
  templateUrl: './defoult-child.html',
  styleUrl: './defoult-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultChild implements OnInit {
  public defoult = 'defoult';
  private cdr = inject(ChangeDetectorRef);
  ngOnInit(): void {
    setTimeout(() => {
      this.defoult = 'defoult-sheicvala';
    }, 3000);
  }
}
