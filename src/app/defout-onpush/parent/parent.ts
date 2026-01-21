import { ChangeDetectionStrategy, Component } from '@angular/core';
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
export class Parent {}
