import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {RandomBeerComponent} from './random-beer.component';
import {BeerService} from '../../shared/service/beer.service';

import "rxjs/add/observable/of";
import {Observable} from "rxjs/Observable";
import {Beer} from "../../shared/model/beer";
import {RestClientService} from "../../shared/service/rest-client/rest-client.service";
import {MockBackend} from '@angular/http/testing';
import {Http} from "@angular/http";

class MockBeerService extends BeerService {
  public getRandomBeer(): Observable<Beer> {
    return Observable.of({});
  }
}

describe('RandomBeerComponent', () => {
  let component: RandomBeerComponent;
  let fixture: ComponentFixture<RandomBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomBeerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: BeerService, useClass: MockBeerService},
        RestClientService,
        {provide: Http, useClass: MockBackend}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

