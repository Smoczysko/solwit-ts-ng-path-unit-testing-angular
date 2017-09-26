import { Component, OnInit } from '@angular/core';

import { Beer } from '../../shared/model/beer';
import { BeerService } from '../../shared/service/beer.service';


@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {

  public beer: Beer;

  constructor (
    private _beer: BeerService
  ) {}

  ngOnInit () {
    this._beer.getRandomBeer().subscribe(beer => {
      this.beer = beer;
    });
  }

}
