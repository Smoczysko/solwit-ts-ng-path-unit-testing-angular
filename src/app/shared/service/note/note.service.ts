import { LocalStorageService } from './../local-storage/local-storage.service';
import { Injectable } from '@angular/core';

const NOTE_KEY = 'note_';

@Injectable()
export class NoteService {

  constructor (
    private _localStorage: LocalStorageService
  ) { }

  public getNote (beerId: number): string {
    return this._localStorage.get(this._getKey(beerId));
  }

  public setNote (beerId: number, note: string) {
    this._localStorage.set(this._getKey(beerId), note);
  }

  private _getKey (beerId: number): string {
    return `${NOTE_KEY}${beerId}`;
  }

}
