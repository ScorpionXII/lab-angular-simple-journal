import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
  entry;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
       this.getEntry(params['id']);
    });
  }

  getEntry(id) {
    this.journalService.get(id).subscribe((entry) => {
      this.entry = entry;
    });
  }

}
