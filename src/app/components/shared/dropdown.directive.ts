import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen: boolean = false;

  constructor() {}

  @HostListener('click') toggoleOpen() {
    this.isOpen = !this.isOpen;
  }
}
