import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { json } from '@rxweb/reactive-form-validators';
import { Product } from '../model/product.model';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent {
@Input()
product: Product = new Product();

@Output() onEditProduct = new EventEmitter<number>();
@Output() onRemoveProduct = new EventEmitter<number>();

  shopData:any = [];
  userdata: any;
  productEmail: any;
  loggedInUserEmail: any;
  allProducts: any = [];
  selectedProductList: any;
  selectedProducts: any;

  constructor(private myrouter:Router, private myservice:NewserviceService){
    this.product = {
      email: '',
      name:'',
      address:'',
      phone:0,
      productBrand:'',
      productCategory:'',
      productDescription:'',
      productImage:'',
      productName:'',
      productPrice:0,
      date:'',
      showEditOption:false,
      id:0

    }
  }

ngOnInit(){
  this.showAllProducts();
  this.userdata = JSON.parse(localStorage.getItem("userData") || "");
  console.log(this.userdata);
  this.loggedInUserEmail = this.userdata.email;

  this.myservice.getAllProducts().subscribe((data)=>{
    console.log(data);
    this.allProducts = data;
    //.log(this.allProducts);
    
  })
}
selectProduct(data:any){
 // console.log(data);
}

getSelectedItems(){
  this.selectedProductList = this.allProducts.filter((value: {isChecked:any},index:any)=>{
    return value.isChecked;
  });
  console.log(this.selectedProductList);

   
}

ourSelection(){
  this.getSelectedItems();
}


saveproduct(){
  console.log("method click");
  this.myservice.putsaveForLater(this.selectedProductList).subscribe((element)=>{
    console.log(element);
    });
    this.myrouter.navigate(["/saveForLater"]);
}

showAllProducts(){

  this.myservice.getAllProducts().subscribe((data)=>{
    console.log(data);
    data.forEach((element:any)=>{
      this.shopData.push(element);
      console.log(this.shopData);
      this.productEmail = element.email;
     //console.log(this.productEmail);
    if( this.productEmail == this.userdata.email){
     element.showEditOption = true;
    }
    else{
      element.showEditOption = false;
    }
    })
  })
}


editProduct(){
this.onEditProduct.emit(this.product.id);

}

deleteProduct(){
  this.onRemoveProduct.emit(this.product.id);
  
}

viewproduct(product :any){
  console.log(product);
  localStorage.setItem("PRODUCT", JSON.stringify(product));
this.myrouter.navigate(['/viewProduct']);

}

}
