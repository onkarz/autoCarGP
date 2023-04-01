import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-whoisusingourapp',
  templateUrl: './whoisusingourapp.component.html',
  styleUrls: ['./whoisusingourapp.component.css']
})
export class WhoisusingourappComponent {
userInfo :any = [];

  constructor( private myservices:NewserviceService ,private myrouter:Router){}

  ngOnInit(){
    this.myservices.getAllUsers().subscribe((data)=>{
      this.userInfo = data;
      console.log(this.userInfo);
  })
  }

  viewUser(user:any){
    localStorage.setItem("User", JSON.stringify(user));
   this.myrouter.navigate(['/viewprofile']);
  }

}
