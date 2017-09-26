import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LocalStorageService } from './shared/service/local-storage/local-storage.service';
import { RestClientService } from './shared/service/rest-client/rest-client.service';
import { BeerService } from './shared/service/beer.service';
import { FavouriteBeerService } from './favourite/service/favourite-beer/favourite-beer.service';
import { IsAdultGuard } from './shared/guard/is-adult/is-adult.guard';
import { CanDeactivateGuard } from './shared/guard/can-deactivate/can-deactivate.guard';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule,

    AppRoutingModule,

    CoreModule,
  ],
  providers: [
    RestClientService,
    LocalStorageService,
    BeerService,
    FavouriteBeerService,

    IsAdultGuard,
    CanDeactivateGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
