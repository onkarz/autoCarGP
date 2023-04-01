import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  profileData: any;

  //only loged in user

  ngOnInit(){
    this.profileData = JSON.parse(localStorage.getItem("userData") || "");
    console.log(this.profileData);

  }
}
