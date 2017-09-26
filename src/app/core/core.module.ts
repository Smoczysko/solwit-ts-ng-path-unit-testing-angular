import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { HeaderComponent } from './header/header.component';
import { NoteService } from './../shared/service/note/note.service';


@NgModule({
  imports: [
    SharedModule,

    CoreRoutingModule,
  ],
  declarations: [
    BeersListComponent,
    BeerDetailsComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    NoteService
  ]
})
export class CoreModule { }
