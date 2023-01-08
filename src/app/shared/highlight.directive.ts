import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class') className!: string

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    this.className = 'hovered-item'
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    this.className = ''
  }
}
