import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { IsAdultGuard } from './../shared/guard/is-adult/is-adult.guard';
import { CanDeactivateGuard } from './../shared/guard/can-deactivate/can-deactivate.guard';

const routes: Routes = [
  { path: 'list', component: BeersListComponent, canActivate: [IsAdultGuard] },
  {
    path: 'details/:id',
    component: BeerDetailsComponent,
    canActivate: [IsAdultGuard],
    canDeactivate: [CanDeactivateGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
