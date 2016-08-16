import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    private _defaultColor = 'green';
    private elementHTML: HTMLElement;
    private element: HTMLElement;
    private document : Document;
    hide: boolean = true;
    constructor(el: ElementRef) {

        this.elementHTML = el.nativeElement;
//.querySelector("#options")
      //  this.elementHTML.style.visibility = 'hidden';
      //  this.element = this.elementHTML.children.namedItem('options');
      // this.element=  this.document.getElementById('options');
        //  this.element = this.elementHTML.getElementsByName('options');
        alert( this.elementHTML );
    }
    /*  @Input() set defaultColor(colorName: string) {
          this._defaultColor = colorName || this._defaultColor;
      }

      @Input('myHighlight') highlightColor: string;*/

    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight(this.highlightColor || this._defaultColor);
        //  this.hide= false;
      //  alert('entro');
      //  this.elementHTML.style.visibility = 'visible';
    }
    @HostListener('mouseleave') onMouseLeave() {
        //  this.highlight(null);
      //  this.elementHTML.style.visibility = 'hidden';
      //  alert('salio');
        //this.hide= true;
    }
    private highlight(color: string) {
        //  this.elementHTML.style.backgroundColor = color;
    }
}
