import { NgModule } from '@angular/core';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FavouriteBeersComponent } from './favourite-beers/favourite-beers.component';


@NgModule({
  imports: [
    SharedModule,
    FavouriteRoutingModule
  ],
  declarations: [
    FavouriteBeersComponent
  ]
})
export class FavouriteModule { }
