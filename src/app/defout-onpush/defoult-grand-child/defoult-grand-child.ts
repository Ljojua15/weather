import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-defoult-grand-child',
  imports: [],
  templateUrl: './defoult-grand-child.html',
  styleUrl: './defoult-grand-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefoultGrandChild implements OnInit {
  public DefoultGrandChild = 'DefoultGrandChild';

  ngOnInit(): void {}
}
