import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelPathComponent } from './travel-path/travel-path.component'; 
import { HomeComponent } from './home/home.component';
import { MoveConnectComponent } from './move-connect/move-connect.component';
import { DynaPageComponent } from './dyna-page/dyna-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'travel', component: TravelPathComponent },
    { path: 'connect', component: MoveConnectComponent },
    { path: 'dyna', component: DynaPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
