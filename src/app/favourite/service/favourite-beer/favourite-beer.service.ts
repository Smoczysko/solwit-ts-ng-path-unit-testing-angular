import { Injectable } from '@angular/core';

import { Beer } from './../../../shared/model/beer';
import { LocalStorageService } from './../../../shared/service/local-storage/local-storage.service';

const FAVOURITE_BEERS_KEY = 'favourite_beers';


@Injectable()
export class FavouriteBeerService {

  constructor (
    private _localStorage: LocalStorageService
  ) { }

  public getFavouriteBeers (): number[] {
    const beers = this._localStorage.get(FAVOURITE_BEERS_KEY);

    return beers || [];
  }

  public addFavouriteBeer (beer: Beer) {
    const currentBeers = this.getFavouriteBeers();

    if (currentBeers.every(beerId => beerId !== beer.id)) {
      currentBeers.push(beer.id);
      this.save(currentBeers);
    }
  }

  public removeFavouriteBeer (beer: Beer) {
    let currentBeers = this.getFavouriteBeers();

    if (currentBeers.some(beerId => beerId === beer.id)) {
      currentBeers = currentBeers.filter(beerId => beerId !== beer.id);
      this.save(currentBeers);
    }
  }

  private save (beersIds: number[]) {
      this._localStorage.set(FAVOURITE_BEERS_KEY, beersIds);
  }

}
