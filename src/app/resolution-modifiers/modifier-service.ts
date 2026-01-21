import { Injectable, signal } from '@angular/core';

@Injectable()
export class ModifierService {
  public count = signal(20);

  public count1 = signal(20);
}
