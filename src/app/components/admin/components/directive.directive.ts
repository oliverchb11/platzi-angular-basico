import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private element: ElementRef) {
      this.element.nativeElement.style.color = 'red';
   }

}
