import { Component, OnInit } from '@angular/core';
import {Beer} from "../beer";
import {BasketService} from "../basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Beer[] = [];

  constructor(private basketService: BasketService) {

  }

  ngOnInit() {
    this.basketService.getBasket().subscribe( basket => this.basket = basket);
    // TODO : calculer total panier
    // TODO : faire la somme des éléments dupliqués
  }

  calculerTotal(): number {

    /*    let total: number = 0.0;
        for(let beer of this.basket){
          total += beer.price;
        }

        return total;*/


    return this.basket.reduce( (a, b) => a + b.price, 0);
  }


}
