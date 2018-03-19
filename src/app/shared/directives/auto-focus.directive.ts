import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  @Input() public timeout: number = 0;

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, this.timeout);
  }
}
