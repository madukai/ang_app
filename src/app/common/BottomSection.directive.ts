import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appBottomSection]'
})
export class BottomSectionDirective {
    constructor(public viewRef: ViewContainerRef) {

    }
}