import { Component } from '@angular/core';
import { BEERS } from './beer-mock';
import {Beer} from "./beer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  beers = BEERS;

  basket: Beer[] = [];


  addBeerToBasket(beer: Beer) {
    this.basket.push(beer);
  }
}
