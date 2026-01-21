import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'abc',
  standalone: true
})
export class AbcPipe implements PipeTransform {
  private domSanitizer = inject(DomSanitizer);

  transform(value: string, search: string): any {
    if (!search || !value) return value;



    const research = new RegExp(search, 'i');

    const result = value.replace(research, (match) => `<span class="purple-text">${match}</span>`);

    return this.domSanitizer.bypassSecurityTrustHtml(result);
  }
}
