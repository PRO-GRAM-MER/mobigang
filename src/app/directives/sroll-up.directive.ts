import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollUp]'
})
export class SrollUpDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
