import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'weather-onpush-grand-child',
  imports: [],
  templateUrl: './onpush-grand-child.html',
  styleUrl: './onpush-grand-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OnpushGrandChild {}
