import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public element : ElementRef) {

    this.element.nativeElement.style.backgroundColor = 'red'
   }

}
