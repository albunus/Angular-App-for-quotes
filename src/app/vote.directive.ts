import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class voteDirective {

  constructor(private elem:ElementRef) {
  }
  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }

}
