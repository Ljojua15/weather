import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'weather-defoult-grand-child',
  imports: [],
  templateUrl: './defoult-grand-child.html',
  styleUrl: './defoult-grand-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefoultGrandChild {}
