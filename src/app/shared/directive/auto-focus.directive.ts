import { element } from 'protractor';
import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  @Input() set appAutoFocusActive (value: boolean) {
    this._isActive = value;

    if (this._isActive && this.isInitialized) {
      this.focusElement();
    }
  }

  private element: ElementRef;
  private _isActive: boolean = true;
  private isInitialized: boolean = false;

  constructor (element: ElementRef) {
    this.element = element;
  }

  ngAfterViewInit () {
    this.isInitialized = true;
    if (this._isActive) {
      this.focusElement();
    }
  }

  private focusElement () {
    /*
      using setTimeout to wait for Angular to remove disabled property from input element
     */
    setTimeout(() => {
      this.element.nativeElement.focus();
    }, 0);
  }

}
