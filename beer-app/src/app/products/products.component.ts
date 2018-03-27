import { Component, OnInit } from '@angular/core';
import {BasketService} from "../basket.service";
import {Beer} from "../beer";
import {BeerService} from "../beer.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
        basket => {
          this.basket = basket;
          this.beerService.fetchBeers().subscribe(
            beers => this.beers = beers
          )
        },
        error => alert("On est a sec!")
      );
  }

}
