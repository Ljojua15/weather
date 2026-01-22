import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-onpush-grand-child',
  imports: [],
  templateUrl: './onpush-grand-child.html',
  styleUrl: './onpush-grand-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OnpushGrandChild implements OnInit {
  public OnpushGrandChild = 'OnpushGrandChild';

  ngOnInit(): void {}
}
