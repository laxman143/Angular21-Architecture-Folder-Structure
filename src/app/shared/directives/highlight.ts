import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  @Input('appHighlight') highlightColor!: string;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
     this.el.nativeElement.style.backgroundColor = this.highlightColor || '#fff3cd';
  }

  @HostListener('mouseleave') onMouseLeave(){
     this.el.nativeElement.style.backgroundColor = "";

  }

}
