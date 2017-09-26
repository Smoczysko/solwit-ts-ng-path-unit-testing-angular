import { Injectable } from '@angular/core';

import { LocalStoragePrefixService } from './local-storage-prefix.service';

declare let window: Window;

@Injectable()
export class LocalStorageService {

  private storage: Storage;
  private prefixService: LocalStoragePrefixService;

  constructor (private localStoragePrefixService: LocalStoragePrefixService) {
    this.storage = window.localStorage;
    this.prefixService = localStoragePrefixService;

    this.prefixService.set('beers_app_storage_');
  }

  public get (key: string): any {
    const value = this.storage.getItem(this.getKey(key));

    return JSON.parse(value);
  }

  public set (key: string, value: any) {
    const stringifedValue = JSON.stringify(value);

    this.storage.setItem(this.getKey(key), stringifedValue);
  }

  public remove (key: string) {
    this.storage.removeItem(this.getKey(key));
  }

  public clear () {
    this.storage.clear();
  }

  private getKey (key: string): string {
    return `${this.prefixService.get()}${key}`;
  }

}
