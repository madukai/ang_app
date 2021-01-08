import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { SubcomponentOneComponent } from './dyna-subcomponent/subcomponent-one.component';
import { SubcomponentTwoComponent } from './dyna-subcomponent/subcomponent-two.component';
import { SubcomponentThreeComponent } from './dyna-subcomponent/subcomponent-three.component';
import { RightSectionDirective } from '../common/RightSection.directive';

@Component({
  selector: 'app-dyna-page',
  templateUrl: './dyna-page.component.html',
  styleUrls: ['./dyna-page.component.css']
})
export class DynaPageComponent implements OnInit {

  @ViewChild(RightSectionDirective) rightSection: RightSectionDirective;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  loadDy1() {
    console.log('Click Dyna one');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentOneComponent);
    this.rightSection.viewRef.clear();
    this.rightSection.viewRef.createComponent(componentFactory);
  }

  loadDy2() {
    console.log('Click Dyna two');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentTwoComponent);
    this.rightSection.viewRef.clear();
    this.rightSection.viewRef.createComponent(componentFactory);
  }

  loadDy3() {
    console.log('Click Dyna three');
    const componentFactory = this.resolver.resolveComponentFactory(SubcomponentThreeComponent);
    this.rightSection.viewRef.clear();
    this.rightSection.viewRef.createComponent(componentFactory);
  }

}
