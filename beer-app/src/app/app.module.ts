import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BeerComponent } from './beer/beer.component';
import { BeerService } from './beer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BasketService} from "./basket.service";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BeerService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
