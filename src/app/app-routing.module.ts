import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelPathComponent } from './travel-path/travel-path.component'; 
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'travel', component: TravelPathComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
