import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Beer } from './../model/beer';


@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnChanges {

  @Input() beers: Beer[] = [];
  @Input() favouriteBeers: Beer[] = [];
  @Input() showFavouriteActions: boolean = false;
  @Input() isAddToFavouriteActive: boolean = false;
  @Input() isRemoveFromFavouriteActive: boolean = false;
  @Input() backUrl: string;

  @Output() addFavouriteBeer: EventEmitter<Beer> = new EventEmitter<Beer>();
  @Output() removeFromFavouriteBeer: EventEmitter<Beer> = new EventEmitter<Beer>();

  public beersToDisplay: Beer[] = [];

  constructor () { }

  ngOnChanges () {
    this.beersToDisplay = this.beers
      .sort( (b1: Beer, b2: Beer) => b1.name.localeCompare(b2.name));
  }

  public get additionalParams (): {[key: string]: string} {
    if (this.backUrl) {
      return {
        back: this.backUrl
      };
    } else {
      return {};
    }
  }

  public isFavourite (beer: Beer): boolean {
    return this.favouriteBeers.some(b => b.id === beer.id);
  }

  public addToFavourite (beer: Beer) {
    this.addFavouriteBeer.emit(beer);
  }

  public removeFromFaovurite (beer: Beer) {
    this.removeFromFavouriteBeer.emit(beer);
  }

  public preventNavigation (event: any) {
    event.stopPropagation();
  }

}
