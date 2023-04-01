import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  profileData:any;
  isUserLogedIn:any;

  constructor(private myrouter:Router, private formbuilder: FormBuilder, private myservice: NewserviceService) { }


  ngOnInit(){
    this.profileData = JSON.parse(localStorage.getItem('userData')!);
    if (this.profileData != null) {
      this.isUserLogedIn = true;
    }
    else {
      this.isUserLogedIn = false;
    }
  }



  LogOut() {

    localStorage.removeItem("userData");
    this.myrouter.navigate(["/about"]);

  }


}
