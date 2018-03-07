import {Component, Input, OnInit} from '@angular/core';
import {Beer} from "../beer";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  basket: Beer[];

  constructor() { }


  ngOnInit() {
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
