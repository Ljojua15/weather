import { Component, inject, Optional, SkipSelf } from '@angular/core';
import { ModifierService } from '../modifier-service';
import { Modifier } from '../modifier';

@Component({
  selector: 'weather-resolution-modifier',
  imports: [Modifier],
  templateUrl: './resolution-modifier.html',
  styleUrl: './resolution-modifier.scss',
  providers: [ModifierService],
})
export class ResolutionModifier {
  public modifierService = inject(ModifierService, { host: true });
  update(){
    this.modifierService.count.update((pre) => pre + 1);
  };
}
