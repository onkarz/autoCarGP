import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product.model';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  shopUrl = "http://localhost:3000/allProducts";
  allProductsDetails = 'http://localhost:3000/allProducts';
 users = 'http://localhost:3000/posts';
 saveProducts = "http://localhost:3000/saveForLater";
  constructor(private http:HttpClient) { }

  userRegistration(registerusers:any){
    console.log(registerusers);
    return this.http.post<any>(this.users,registerusers);
  }

  // userLogin(loginuser:any){
  //   console.log(loginuser);
  //   return this.http.post<any>('http://localhost:3000/loginUsers',loginuser);
  // }

  addProducts(product:Product){
    return this.http.post<any>(this.shopUrl, product);
  }

getAllProducts(){
  return this.http.get<any>(this.allProductsDetails)
}

deleteProduct(id:any){
return this.http.delete(this.allProductsDetails + '/' + id);
}

getAllUsers(){
  return this.http.get<any>(this.users);
}

 putsaveForLater(selectedProductList:any){
  console.log(selectedProductList);
  return this.http.post<any>('http://localhost:3000/saveForLater',selectedProductList);
 }

 getSaveProducts(){
  return this.http.get<any>(this.saveProducts);
 }

 putdata(product:any){
console.log(product);
 }


 carBooking(bookingDetails:any){
  console.log(bookingDetails);
  return this.http.post<any>('http://localhost:3000/carBookings',bookingDetails);
 }
}
