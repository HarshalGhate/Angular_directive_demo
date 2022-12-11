import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elemnt:ElementRef) {
    elemnt.nativeElement.style.color='blue'
   }

   @HostListener('click')click(){
     this.elemnt.nativeElement.style.background='red'
   }

   @HostListener('mouseenter')mouseenter(){
     this.elemnt.nativeElement.style.fontSize='30px'
   }

   @HostListener('mouseleave')mouseleave(){
     this.elemnt.nativeElement.style.fontSize='10px'
   }
}
