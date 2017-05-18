import { Routes } from '@angular/router';
import { EntryListComponent } from '../components/entry-list/entry-list.component';
import {SingleEntryComponent} from '../components/single-entry/single-entry.component';
import {EntryFormComponent} from "../components/entry-form/entry-form.component";

export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'create', component: EntryFormComponent },
  { path: 'entry/:id', component: SingleEntryComponent },
  { path: '**', redirectTo: '' }
];
