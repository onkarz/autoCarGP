import { Component } from '@angular/core';
import {NewserviceService} from '../newservice.service'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

productInfo:any;

constructor(private service:NewserviceService){}


  ngOnInit(){
this.productInfo = JSON.parse(localStorage.getItem("PRODUCT") || "");
console.log(this.productInfo);
  }
  saveForLater(){

    let product = {
      name:this.productInfo.productName,
      image:this.productInfo.productImage,
      description:this.productInfo.productDescription,
      price:this.productInfo.productPrice,
      brand:this.productInfo.productBrand,
      user:this.productInfo.name,
      phone:this.productInfo.phone,
      date:this.productInfo.date
    }
    console.log(product);
  }
}
