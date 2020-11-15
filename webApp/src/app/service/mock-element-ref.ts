import { ElementRef } from '@angular/core';

/**
 * html元素引用的测试桩
 */
export class MockElementRef extends ElementRef {
  private _NATIVEELEMENT: HTMLElement;

  constructor() {
    super(null);
  }

  // @ts-ignore
  get nativeElement(): HTMLElement {
    return this._NATIVEELEMENT;
  }

  set nativeElement(value: HTMLElement) {
    this._NATIVEELEMENT = value;
  }
}
