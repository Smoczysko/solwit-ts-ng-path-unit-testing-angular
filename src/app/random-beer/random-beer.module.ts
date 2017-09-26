import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { RandomBeerRoutingModule } from './random-beer-routing.module';
import { RandomBeerComponent } from './random-beer/random-beer.component';

@NgModule({
  imports: [
    SharedModule,

    RandomBeerRoutingModule
  ],
  declarations: [
    RandomBeerComponent,
  ]
})
export class RandomBeerModule { }
