import { Component } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
profileInfo: any;
  
ngOnInit(){
  this.profileInfo = JSON.parse(localStorage.getItem("User") || "");
console.log(this.profileInfo);
}
}
