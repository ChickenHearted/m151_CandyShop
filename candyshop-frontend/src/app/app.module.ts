import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RegisterComponent} from "./page/register/register.component";
import {LoginComponent} from "./page/login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import { CandyShopComponent } from './page/candy-shop/candy-shop.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC21IkIsRWTj0oTAHPsPVvcLqZixSso2gs",
  authDomain: "candy-shop-a2644.firebaseapp.com",
  databaseURL: "https://candy-shop-a2644.firebaseio.com",
  projectId: "candy-shop-a2644",
  storageBucket: "candy-shop-a2644.appspot.com",
  messagingSenderId: "319489475260",
  appId: "1:319489475260:web:776c57ad3dcb12f103c6b9",
  measurementId: "G-8B6FB88XTW"
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CandyShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
