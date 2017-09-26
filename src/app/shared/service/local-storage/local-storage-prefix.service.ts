import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/observable/of";

@Injectable()
export class LocalStoragePrefixService {

  private prefix: string;

  constructor () {
  }

  public get (): string {
    return this.prefix ? this.prefix : '';
  }

  public getObservable (): Observable<string> {
    return Observable.of(this.get());
  }

  public getPromise (): Promise<string> {
    return new Promise((resolve) => {
      resolve(this.get());
    });
  }

  public set (prefix: string) {
    this.prefix = prefix;
  }

  public clear () {
    this.prefix = '';
  }
}
