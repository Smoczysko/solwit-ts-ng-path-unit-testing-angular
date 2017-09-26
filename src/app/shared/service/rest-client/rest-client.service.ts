import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import "rxjs/add/operator/map";

const BASE_API_URL = 'https://api.punkapi.com/v2/';

@Injectable()
export class RestClientService {

  constructor (
    private _http: Http
  ) { }

  public get (url): Observable<any> {
    return this._http
      .get(`${BASE_API_URL}${url}`)
      .map((res: Response) => res.json());
  }
}
