import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LocalStorageService } from './../../service/local-storage/local-storage.service';

const IS_ADULT_KEY = 'is_adult';
const CONFIRMATION_MESSAGE = 'Please confirm that you are at least 18 year old.';

declare const window: Window;

@Injectable()
export class IsAdultGuard implements CanActivate {

  constructor (
    private _localStorage: LocalStorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._localStorage.get(IS_ADULT_KEY)) {
      return true;
    } else {
        const confirmation = window.confirm(CONFIRMATION_MESSAGE);
        this._localStorage.set(IS_ADULT_KEY, confirmation);
        return confirmation;
    }
  }
}
