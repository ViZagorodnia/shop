import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontsBold]'
})
export class FontsBoldDirective {

  @Input() setWeight: number = 300
  header!: HTMLHeadingElement

  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) {
    this.header = element.nativeElement
  }

  @HostListener('click')
  clicked(): void {
    this.renderer.setStyle(this.header, 'font-weight', this.setWeight)
  }
}
