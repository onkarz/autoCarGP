import { ThankyouComponent } from './thankyou/thankyou.component';
import { BookcarComponent } from './bookcar/bookcar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterComponent } from './register/register.component';
import { SaveforlaterComponent } from './saveforlater/saveforlater.component';
import { SellMyProductComponent } from './sell-my-product/sell-my-product.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { WhoisusingourappComponent } from './whoisusingourapp/whoisusingourapp.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sellMyProduct',
    component: SellMyProductComponent,
  },
  {
    path: 'showProducts',
    component: ShowproductsComponent,
  },
  {
    path: 'viewProduct',
    component: ViewproductComponent,
  },
  {
    path: 'whoisusingourapp',
    component: WhoisusingourappComponent,
  },
  {
    path: 'viewprofile',
    component: ViewprofileComponent,
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
  },
  {
    path: 'saveForLater',
    component: SaveforlaterComponent,
  },
  {
    path: 'bookcar',
    component: BookcarComponent,
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
