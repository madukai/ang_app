import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appRightSection]'
})
export class RightSectionDirective {
    constructor(private viewRef: ViewContainerRef) {

    }

    getViewRef() : ViewContainerRef {
        return this.viewRef;
    }
}