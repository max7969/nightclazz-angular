import { Component, OnInit } from '@angular/core';
import {Beer} from "../beer";
import {BasketService} from "../basket.service";
import {Customer} from "../Customer";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Beer[] = [];

  customer: Customer = {  };

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.basketService.getBasket().subscribe(
      basket => {
        this.basket = basket;
        this.resumerPanier(this.basket);
      }
    );


  }

  validerPanier(){
    this.basketService.confirmBasket(this.customer);
  }


  resumerPanier(beers : Beer[]) {

    let panier = beers.map((beer, i, b) => {
      return {
        label: beer.label,
        price: beer.price,
        qte: b.reduce( (accumulateur, valeurCourante) => {
          return valeurCourante.label === beer.label ? accumulateur +1 : accumulateur;
        }, 0)
      }
    });

    console.log(JSON.stringify(panier));
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
