import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityComponent } from './city/city.component';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { PersonComponent } from './person/person.component';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  {path:"city", component:CityComponent},
    {path:"value", component:ValueComponent},
    {path:"about",component:AboutComponent},
    {path:"cityDetail/:cityId", component:CityDetailComponent},
    {path:"personDetail/:personId", component:PersonDetailComponent},
    {path:"person", component:PersonComponent},
    {path:"**", redirectTo:"city", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
