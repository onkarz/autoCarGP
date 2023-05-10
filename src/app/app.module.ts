import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { LoginComponent } from './login/login.component';
import { SellMyProductComponent } from './sell-my-product/sell-my-product.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { WhoisusingourappComponent } from './whoisusingourapp/whoisusingourapp.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import {MatMenuModule} from '@angular/material/menu';
import { SaveforlaterComponent } from './saveforlater/saveforlater.component';
import { RentcarComponent } from './rentcar/rentcar.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
// <-- #2 import module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    SellMyProductComponent,
    ShowproductsComponent,
    ViewproductComponent,
    WhoisusingourappComponent,
    MyprofileComponent,
    ViewprofileComponent,
    SaveforlaterComponent,
    RentcarComponent,
    BookcarComponent,
    ThankyouComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
