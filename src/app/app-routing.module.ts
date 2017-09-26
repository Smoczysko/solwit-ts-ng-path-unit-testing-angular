import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { IsAdultGuard } from './shared/guard/is-adult/is-adult.guard';

const APP_ROUTES = [
  { path: '', redirectTo: '/list', pathMatch: 'full', canActivate: [IsAdultGuard] },
  { path: 'favourite', loadChildren: 'app/favourite/favourite.module#FavouriteModule' },
  { path: 'random', loadChildren: 'app/random-beer/random-beer.module#RandomBeerModule' },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
