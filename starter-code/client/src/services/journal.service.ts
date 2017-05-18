import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class JournalService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getAll() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }

  create(entryObj) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(entryObj);

    return this.http.post(`${this.BASE_URL}/api/journal-entries`, body, options)
      .map((res) => res.json());
  }
}
