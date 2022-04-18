import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
})
export class HiglightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor='red';
  }
}
