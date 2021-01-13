import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appBottomSection]'
})
export class BottomSectionDirective {
    constructor(private viewRef: ViewContainerRef) {

    }

    getViewRef() : ViewContainerRef {
        return this.viewRef;
    }
}