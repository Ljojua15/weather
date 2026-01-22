import { Component, inject } from '@angular/core';
import { Prodaction } from '../dependency-services/prodaction';
import { Mock } from '../dependency-services/mock';

@Component({
  selector: 'weather-dependency',
  imports: [],
  templateUrl: './dependency.html',
  styleUrl: './dependency.scss',
  providers: [{ provide: Prodaction, useClass: Mock }],
})
export class Dependency {
  public prod = inject(Prodaction);
}
