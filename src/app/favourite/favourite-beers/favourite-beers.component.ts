import { Component, OnInit } from '@angular/core';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';
import { FavouriteBeerService } from './../service/favourite-beer/favourite-beer.service';


@Component({
  selector: 'app-favourite-beers',
  templateUrl: './favourite-beers.component.html',
  styleUrls: ['./favourite-beers.component.css']
})
export class FavouriteBeersComponent implements OnInit {

  public beers: Beer[];

  public beerToRemove: Beer = null;

  private _beers: Beer[];

  constructor (
    private _beer: BeerService,
    private _favouriteBeer: FavouriteBeerService
  ) { }

  ngOnInit () {
    this._beer.getBeers().subscribe((beers) => {
      this._beers = beers;
      this.setupFavouriteBeers();
    });
  }

  public removeFromFavourite (beer: Beer) {
    this.beerToRemove = beer;
  }

  public onRemoveFavouriteAccept () {
    const beer = this.beerToRemove;
    this.beerToRemove = null;

    this._favouriteBeer.removeFavouriteBeer(beer);
    this.setupFavouriteBeers();
  }

  public onRemoveFavouriteCancel () {
    this.beerToRemove = null;
  }

  private setupFavouriteBeers () {
    const favouriteBeersIds = this._favouriteBeer.getFavouriteBeers();

    this.beers = this._beers
        .filter(beer => favouriteBeersIds.find(beerId => beerId === beer.id) );
  }

}
