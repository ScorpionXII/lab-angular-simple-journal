import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from '../components/entry-list/entry-list.component';
import { JournalService } from '../services/journal.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { SingleEntryComponent } from '../components/single-entry/single-entry.component';
import { EntryFormComponent } from '../components/entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
