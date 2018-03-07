import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './beer-mock';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  beers: Beer[];

  basket: Beer[] = [];


  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerService.fetchBeers().subscribe(beers => this.beers = beers);
  }

  addBeerToBasket(beer: Beer) {
    this.basket.push(beer);
  }
}
