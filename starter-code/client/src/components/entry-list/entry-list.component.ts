import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journals;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getAll().subscribe(journals => {
      return this.journals = journals;
    });
  }

}
