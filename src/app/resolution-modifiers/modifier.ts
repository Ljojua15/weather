import { Directive } from '@angular/core';
import { ModifierService } from './modifier-service';

@Directive({
  selector: '[weatherModifier]',
  providers: [ModifierService]
})
export class Modifier {

  constructor() { }

}
