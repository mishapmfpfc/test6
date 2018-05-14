import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBigText]'
})
export class BigTextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = '33%';
    el.nativeElement.style.display = 'inline';

  }

}
