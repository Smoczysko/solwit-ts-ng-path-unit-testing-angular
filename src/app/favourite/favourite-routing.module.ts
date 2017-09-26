import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteBeersComponent } from './favourite-beers/favourite-beers.component';
import { IsAdultGuard } from './../shared/guard/is-adult/is-adult.guard';

const routes: Routes = [
  {path: '', component: FavouriteBeersComponent, canActivate: [IsAdultGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRoutingModule { }
