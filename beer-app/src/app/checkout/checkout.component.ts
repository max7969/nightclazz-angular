import {Component, OnInit} from '@angular/core';
import {BasketService} from "../basket.service";
import {Beer} from "../beer";
import {Customer} from "./customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  basket: Beer[] = [];

  customer: Customer = {
    name: '',
    address: '',
    creditCard: ''
  };

  constructor(private basketService : BasketService, private router: Router) {

  }

  ngOnInit() {
    this.basketService.getBasket().subscribe(basket => this.basket= basket);
  }

  validerCommande(){
    this.basketService.validerCommande(this.customer).subscribe(
      reponse => {
        alert("Commande validée");
        this.router.navigateByUrl('/products');
      }
    );
  }

}
