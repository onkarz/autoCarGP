import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product.model';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileData: any;
  products: Product[] = [];
  productForDisplay: Product[] = [];
  isUserLogedIn: boolean = false;
  public sellProductForm!: FormGroup;
  message: any;
  imageURl: any;
  showEditOption: boolean = false;
  productImage: any;

  @ViewChild('sellMyProduct') sellMyProduct: any;


    constructor(private myrouter:Router, private formbuilder: FormBuilder, private myservice: NewserviceService) { }

  ngOnInit() {

      this.sellProductForm = this.formbuilder.group({
        email: this.formbuilder.control(''),
        name: this.formbuilder.control(''),
        productName: this.formbuilder.control(''),
        productBrand: this.formbuilder.control(''),
        productPrice: this.formbuilder.control(''),
        address: this.formbuilder.control(''),
        phone: this.formbuilder.control(''),
        productCategory: this.formbuilder.control(''),
        productDescription: this.formbuilder.control(''),
        productImage: this.formbuilder.control(''),
        date: this.formbuilder.control(''),
      });





this.profileData = JSON.parse(localStorage.getItem('userData')!);



    if (this.profileData != null) {

      this.isUserLogedIn = true;
    }
    else {
      this.isUserLogedIn = false;
    }

   // this.logedInUserStatus();
    this.myservice.getAllProducts().subscribe((data) => {
      for (let prod of data) {
        this.products.unshift(prod);
      }
      this.productForDisplay = this.products;
    })

  }

logedInUserStatus(){

}

  setForm(prod: Product) {

    this.name.setValue(prod.name);
    this.email.setValue(prod.email);
    this.phone.setValue(prod.phone);
    this.address.setValue(prod.address);
    this.productName.setValue(prod.productName);
    this.productImage = '';
    this.productBrand.setValue(prod.productBrand);
    this.productCategory.setValue(prod.productCategory);
    this.productDescription.setValue(prod.productDescription);
    this.productPrice.setValue(prod.productPrice);
    this.date.setValue(prod.date);
 }

clearForm(){
  this.name.setValue('');
    this.email.setValue('');
    this.phone.setValue('');
    this.address.setValue('');
    this.productName.setValue('');
    this.productImage.setValue('');
    this.productBrand.setValue('');
    this.productCategory.setValue('');
    this.productDescription.setValue('');
    this.productPrice.setValue('');
    this.date.setValue('');
}

  public get name(): FormControl {
    return this.sellProductForm.get('name') as FormControl;
  }

  public get email(): FormControl {
    return this.sellProductForm.get('email') as FormControl;
  }

  public get phone(): FormControl {
    return this.sellProductForm.get('phone') as FormControl;
  }

  public get address(): FormControl {
    return this.sellProductForm.get('address') as FormControl;
  }

  public get productName(): FormControl {
    return this.sellProductForm.get('productName') as FormControl;
  }

  public get productBrand(): FormControl {
    return this.sellProductForm.get('productBrand') as FormControl;
  }

  public get productCategory(): FormControl {
    return this.sellProductForm.get('productCategory') as FormControl;
  }

  public get productPrice(): FormControl {
    return this.sellProductForm.get('productPrice') as FormControl;
  }

  public get productDescription(): FormControl {
    return this.sellProductForm.get('productDescription') as FormControl;
  }

  public get date(): FormControl {
    return this.sellProductForm.get('date') as FormControl;
  }




  LogOut() {

    localStorage.removeItem("userData");
    this.myrouter.navigate(["/about"]);

  }

  addProduct() {
    let product: Product = {
      email: this.email.value,
      name: this.name.value,
      phone: this.phone.value,
      address: this.address.value,
      productImage: this.productImage,
      productName: this.productName.value,
      productBrand: this.productBrand.value,
      productCategory: this.productCategory.value,
      productDescription: this.productDescription.value,
      productPrice: this.productPrice.value,
      date: this.date.value,
      showEditOption: this.showEditOption,
      id: 0
    }
    console.log(product);

    this.myservice.addProducts(product).subscribe((data: Product) => {
      this.products.unshift(data);
      this.clearForm();
      location.reload();
    })
  }

  onClick(){
    this.myrouter.navigate(["/saveForLater"]);
  }

  selectFile(event: any) {
    console.log(event);
    var typeOfImg = event.target.files[0].type;
    if (typeOfImg.match(/image\/*/) == null) {
      this.message = "only images can add";
      return;
    }

    var readImg = new FileReader();
    readImg.readAsDataURL(event.target.files[0]);
    readImg.onload = (_event) => {
      this.message = "";
      this.imageURl = readImg.result;
      console.log(this.imageURl);
      this.productImage = readImg.result;
    }

  }

  edit(event: any) {
    this.products.forEach((val, index) => {
      if (val.id === event) {
        this.setForm(val);
      }

    });

    this.remove(event);
    this.sellMyProduct.nativeElement.click();


  }


  remove(event: any) {
    this.products.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.myservice.deleteProduct(event).subscribe((data)=>{
          this.products.splice(index, 1);
        });
      }

    });
  }

  bookCar(){
    this.myrouter.navigate(["/bookcar"]);
  }
}
