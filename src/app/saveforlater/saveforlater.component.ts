import { Component } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-saveforlater',
  templateUrl: './saveforlater.component.html',
  styleUrls: ['./saveforlater.component.css']
})
export class SaveforlaterComponent {
saveProducts:any = [];
brand :any;

constructor(private myservices:NewserviceService){}

ngOnInit(){
  this.myservices.getSaveProducts().subscribe((data)=>{
    console.log(data);
    this.saveProducts = data;
    this.brand = data.productBrand;

    console.log(this.saveProducts);
    
  })
}

selectProduct(data:any){
  console.log(data);
}


}
