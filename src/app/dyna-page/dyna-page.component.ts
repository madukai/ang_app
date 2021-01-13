import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { SubcomponentOneComponent } from './dyna-subcomponent/subcomponent-one.component';
import { SubcomponentTwoComponent } from './dyna-subcomponent/subcomponent-two.component';
import { SubcomponentThreeComponent } from './dyna-subcomponent/subcomponent-three.component';
import { RightSectionDirective } from '../common/RightSection.directive';
import { BottomCompComponent } from './dyna-bottom-subcomp/bottom-comp.component';
import { BottomSectionDirective } from '../common/BottomSection.directive';

@Component({
  selector: 'app-dyna-page',
  templateUrl: './dyna-page.component.html',
  styleUrls: ['./dyna-page.component.css']
})
export class DynaPageComponent implements OnInit {

  @ViewChild(RightSectionDirective) rightSection: RightSectionDirective;
  @ViewChild(BottomSectionDirective) bottomSection: BottomSectionDirective;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.loadBottom();
  }

  loadDy1() {
    console.log('Click Dyna one');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentOneComponent);
    this.rightSection.getViewRef().clear();
    this.rightSection.getViewRef().createComponent(componentFactory);
  }

  loadDy2() {
    console.log('Click Dyna two');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentTwoComponent);
    this.rightSection.getViewRef().clear();
    this.rightSection.getViewRef().createComponent(componentFactory);
  }

  loadDy3() {
    console.log('Click Dyna three');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentThreeComponent);
    this.rightSection.getViewRef().clear();
    this.rightSection.getViewRef().createComponent(componentFactory);
  }

  loadBottom() {
    console.log('Bottom component loaded');
    const componentFactory = this.resolver.resolveComponentFactory(BottomCompComponent);
    const btmViewRef = this.bottomSection.getViewRef();
    btmViewRef.clear();
    btmViewRef.createComponent(componentFactory);
  }

}
