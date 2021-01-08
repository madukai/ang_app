import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appRightSection]'
})
export class RightSectionDirective {
    constructor(public viewRef: ViewContainerRef) {

    }
}