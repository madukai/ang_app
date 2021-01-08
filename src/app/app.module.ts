import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FibService } from './fib.service';
import { FibModComponent } from './fib-mod/fib-mod.component';
import { ViewComponent } from './view/view.component';
import { BoxColorComponent } from './box-color/box-color.component';
import { SvgModComponent } from './svg-mod/svg-mod.component';
import { SvgPathComponent } from './svg-path/svg-path.component';
import { TravelPathComponent } from './travel-path/travel-path.component';
import { HomeComponent } from './home/home.component';
import { MoveConnectComponent } from './move-connect/move-connect.component';
import { DynaPageComponent } from './dyna-page/dyna-page.component';
import { SubcomponentOneComponent } from './dyna-page/dyna-subcomponent/subcomponent-one.component';
import { SubcomponentTwoComponent } from './dyna-page/dyna-subcomponent/subcomponent-two.component';
import { SubcomponentThreeComponent } from './dyna-page/dyna-subcomponent/subcomponent-three.component';
import { RightSectionDirective } from './common/RightSection.directive';

@NgModule({
  declarations: [
    AppComponent,
    FibModComponent,
    ViewComponent,
    BoxColorComponent,
    SvgModComponent,
    SvgPathComponent,
    TravelPathComponent,
    HomeComponent,
    MoveConnectComponent,
    DynaPageComponent,
    RightSectionDirective,
    SubcomponentOneComponent,
    SubcomponentTwoComponent,
    SubcomponentThreeComponent
  ],
  entryComponents: [
    SubcomponentOneComponent,
    SubcomponentTwoComponent,
    SubcomponentThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FibService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
