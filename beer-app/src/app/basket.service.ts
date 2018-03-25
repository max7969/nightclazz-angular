import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Beer} from "./beer";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BasketService {

  readonly URL: string = 'http://localhost:1337/api/v1/basket';

  constructor(private http: HttpClient) { }

  getBasket(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.URL);
  }

  updateBasket(moarBeer: Beer) : Observable<Beer[]> {
    return this.http.post<Beer[]>(this.URL, moarBeer);
  }


}
