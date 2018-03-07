import { Injectable } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './beer-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }

  fetchBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>('http://localhost:1337/api/v1/beers');
  }
}
