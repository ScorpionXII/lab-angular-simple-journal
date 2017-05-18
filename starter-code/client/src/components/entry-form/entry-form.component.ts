import { Component, OnInit } from '@angular/core';
import { JournalService } from "../../services/journal.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})

export class EntryFormComponent implements OnInit {
  entry: Object = {};

  constructor(
    private journalService: JournalService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  createEntry() {
    this.journalService.create(this.entry).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
