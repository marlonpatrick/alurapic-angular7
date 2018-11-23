import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  @Input() brightness: string = '70%';

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'filter', 'brightness(100%)');
  }
}
