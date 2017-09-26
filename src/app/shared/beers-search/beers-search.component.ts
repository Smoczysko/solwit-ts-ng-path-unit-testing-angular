import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-beers-search',
  templateUrl: './beers-search.component.html',
  styleUrls: ['./beers-search.component.css']
})
export class BeersSearchComponent implements OnInit {

  @Input() phrase: string = '';

  @Output() phraseChange: EventEmitter<string> = new EventEmitter<string>();

  public isActive: boolean = false;

  private _searchPhrase: string;

  constructor() { }

  ngOnInit() {
    this._searchPhrase = this.phrase;
  }

  public get searchPhrase (): string {
    return this._searchPhrase;
  }

  public set searchPhrase (value: string) {
    this._searchPhrase = value;
    this.phraseChange.emit(this.searchPhrase);
  }

  public setActive () {
    this.isActive = true;
  }

}
