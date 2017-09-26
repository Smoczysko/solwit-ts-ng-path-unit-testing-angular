import { Component, OnInit, ViewChild } from '@angular/core';

import { BeersSearchComponent } from './../../shared/beers-search/beers-search.component';
import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';
import { FavouriteBeerService } from './../../favourite/service/favourite-beer/favourite-beer.service';


@Component({
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  @ViewChild(BeersSearchComponent) private beersSearch: BeersSearchComponent;

  public beers: Beer[];
  public favouriteBeers: Beer[];

  private _beers: Beer[] = [];

  private _searchPhrase: string = '';

  constructor (
    private _beer: BeerService,
    private _favouriteBeer: FavouriteBeerService
  ) { }

  ngOnInit () {
    const favouriteBeersIds = this._favouriteBeer.getFavouriteBeers();

    this._beer.getBeers().subscribe( (beers) => {
      this._beers = beers;

      this.favouriteBeers = this.filterFavouriteBeers(this._beers, favouriteBeersIds);

      this.beers = beers;
      this.beersSearch.setActive();
    });
  }

  public get searchPhrase (): string {
    return this._searchPhrase;
  }

  public set searchPhrase (value: string) {
    this._searchPhrase = value;
    this.search();
  }

  public search () {
    const phrase = this.searchPhrase.trim().toLowerCase();

    this.beers = this._beers
      .filter(beer =>
        beer.name.toLowerCase().indexOf(phrase) > -1 ||
        beer.description.toLowerCase().indexOf(phrase) > -1);
  }

  public addFavouriteBeer (beer: Beer) {
    this._favouriteBeer.addFavouriteBeer(beer);

    const favouriteBeersIds = this._favouriteBeer.getFavouriteBeers();

    this.favouriteBeers = this.filterFavouriteBeers(this._beers, favouriteBeersIds);
  }

  private filterFavouriteBeers (allBeers: Beer[], favouriteBeersIds: number[]): Beer[] {
    return allBeers
        .filter(beer => favouriteBeersIds.some(beerId => beerId === beer.id) );
  }

}
