import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoteHighlighter]'
})
export class NoteHighlighterDirective {
 
  constructor(private el: ElementRef,private renderer: Renderer2,) {}

  @HostListener('mouseover', ['$event']) onMouseover($event:Event){
    this.renderer.addClass(this.el.nativeElement,'setBorder')
  }

  @HostListener('mouseout', ['$event']) onMouseout($event:Event){
    this.renderer.removeClass(this.el.nativeElement,'setBorder')
  }

}
