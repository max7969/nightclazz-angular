import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BeerComponent } from './beer/beer.component';
import { BeerService } from './beer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BasketService} from "./basket.service";
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import {CheckoutComponent} from "./checkout/checkout.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BeerComponent,
    CheckoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BeerService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
