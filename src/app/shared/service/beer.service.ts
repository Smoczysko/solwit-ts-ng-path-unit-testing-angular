import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Beer, IBeerRaw } from '../model/beer';
import { RestClientService } from './rest-client/rest-client.service';

const BASE_BEERS_URL = 'beers';
const RANDOM_BEER_SUFFIX = '/random';
const RANDOM_BEER_URL = `${BASE_BEERS_URL}${RANDOM_BEER_SUFFIX}`;


@Injectable()
export class BeerService {

  private _beersList: Beer[];

  constructor (
    private _restClient: RestClientService
  ) { }

  public getBeers (): Observable<Beer[]> {
    if (this._beersList) {
      return Observable.of(this._beersList);
    } else {
      return this._restClient.get(BASE_BEERS_URL)
        .map(this.mapBeers)
        .do(beers => {
          this._beersList = beers;
        });
    }

  }

  public getBeer (beerId: number): Observable<Beer> {
    return this._restClient.get(`${BASE_BEERS_URL}/${beerId}`)
      .map(this.mapBeer);
  }

  public getRandomBeer (): Observable<Beer> {
    return this._restClient.get(RANDOM_BEER_URL)
      .map(this.mapBeer);
  }

  private mapBeers (response: any): Beer[] {
    const beers: IBeerRaw[] = <IBeerRaw[]> response;

    return beers.map(beer => new Beer(beer));
  }

  private mapBeer (response: any): Beer {
    const beer: IBeerRaw[] = <IBeerRaw[]> response;

    return new Beer(beer[0]);
  }

}
