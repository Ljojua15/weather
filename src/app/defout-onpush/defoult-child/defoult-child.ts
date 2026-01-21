import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-defoult-child',
  imports: [],
  templateUrl: './defoult-child.html',
  styleUrl: './defoult-child.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultChild implements OnInit {
  public defoult = 'defoult';

  ngOnInit(): void {}
}
