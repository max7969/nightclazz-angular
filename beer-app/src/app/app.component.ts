import { Component } from '@angular/core';
import { BEERS } from './beer-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  beers = BEERS;

  title = 'app';
}
