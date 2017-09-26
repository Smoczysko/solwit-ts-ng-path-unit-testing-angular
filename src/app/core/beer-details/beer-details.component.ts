import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CanComponentDeactivate } from './../../shared/guard/can-deactivate/can-deactivate.guard';
import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';
import { NoteService } from './../../shared/service/note/note.service';


const UNSAVED_CHANGES_LEAVE = 'Are you sure you want to leave without saving note?';

@Component({
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit, CanComponentDeactivate {

  public beer: Beer;
  public beerNote: string = '';

  public backUrl: string = '/';

  private _beerNote: string = '';

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _beer: BeerService,
    private _note: NoteService
  ) { }

  ngOnInit () {
    const beerId: number = +this._activatedRoute.snapshot.params['id'];
    const backUrl = this._activatedRoute.snapshot.params['back'];

    if (backUrl) {
      this.backUrl = backUrl;
    }

    this.beerNote = this._note.getNote(beerId) || '';
    this._beerNote = this.beerNote || '';

    this._beer.getBeer(beerId).subscribe(beer => {
      this.beer = beer;
    });
  }

  canDeactivate (): boolean {
    if (this._beerNote.localeCompare(this.beerNote) === 0) {
      return true;
    } else {
      return window.confirm(UNSAVED_CHANGES_LEAVE);
    }
  }

  public onSaveNote () {
    this._note.setNote(this.beer.id, this.beerNote);
    this._beerNote = this.beerNote || '';
  }

}
