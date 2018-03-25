import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BEERS } from './beer-mock';
import { BeerService } from './beer.service';
import {BasketService} from "./basket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  beers: Beer[];

  basket: Beer[] = [];


  constructor(private beerService: BeerService, private basketService: BasketService) {
  }

  ngOnInit() {
    this.beerService.fetchBeers().subscribe(beers => this.beers = beers);
    this.basketService.getBasket().subscribe( basket => this.basket = basket);
  }

  addBeerToBasket(beer: Beer) {
    this.basketService.updateBasket(beer)
      .subscribe(
        basket => this.basket = basket,
        error => alert("On est a sec!")
      );
  }
}
