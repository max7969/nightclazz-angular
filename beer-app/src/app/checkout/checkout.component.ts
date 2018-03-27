import {Component, OnInit} from '@angular/core';
import {BasketService} from "../basket.service";
import {Beer} from "../beer";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  basket: Beer[];

  constructor(private basketService : BasketService) {

  }

  ngOnInit() {
    this.basketService.getBasket().subscribe(basket => this.basket= basket);
  }

}
