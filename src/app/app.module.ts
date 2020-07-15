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

@NgModule({
  declarations: [
    AppComponent,
    FibModComponent,
    ViewComponent,
    BoxColorComponent,
    SvgModComponent,
    SvgPathComponent,
    TravelPathComponent,
    HomeComponent
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
