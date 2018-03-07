import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Beer } from '../beer';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  @Input() beer: Beer;

  @Output()
  addBeerEvent: EventEmitter<Beer> = new EventEmitter<Beer>();

  constructor() { }

  ngOnInit() {
  }

  onAddBeer(){
    this.addBeerEvent.emit(this.beer);
  }
}
