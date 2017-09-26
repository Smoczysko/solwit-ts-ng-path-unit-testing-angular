import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomBeerComponent } from './random-beer/random-beer.component';
import { IsAdultGuard } from './../shared/guard/is-adult/is-adult.guard';

const routes: Routes = [
  {path: '', component: RandomBeerComponent, canActivate: [IsAdultGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomBeerRoutingModule { }
