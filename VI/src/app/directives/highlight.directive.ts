import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' , // The directive selector
  standalone: false 
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');  // Change the background color when mouse enters
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent');  // Remove the background color when mouse leaves
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
