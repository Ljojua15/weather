import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-onpush-child',
  imports: [],
  templateUrl: './onpush-child.html',
  styleUrl: './onpush-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OnpushChild implements OnInit {
  public onpush = 'onpush';

  ngOnInit(): void {}
}
