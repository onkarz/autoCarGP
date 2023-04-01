import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 public loginForm!:any;
 email!:string;
 password!: string;
  noResultReturned!: boolean;
constructor( private router:Router , private formbuilder:FormBuilder,private http :HttpClient , private myservice:NewserviceService){}

ngOnInit(){
  this.loginForm=this.formbuilder.group(
    {
    email:new FormControl(''),
    password:new FormControl('')  
    });
}

  goToRegister(){
    this.router.navigate(["/register"]);
 }

 logindata(){

  console.log(this.loginForm.value);
    this.noResultReturned = true;
    this.http.get<any>('http://localhost:3000/posts').subscribe(
      (result: any[]) => {
        console.log(result);
        const user = result.find((x: any) => {
          return (
            x.email == this.loginForm.value.email &&
            x.password == this.loginForm.value.password
          );
        });
      

        if (user) {
          console.log(user);
          this.noResultReturned = false;
          //this.toastr.success('Login Succussful');
          localStorage.setItem('userData', JSON.stringify(user));
          this.router.navigate(['/home']);
        } else {
          alert('Invalid Email or Password');
          // this.router.navigate(['/registerPage']);
        }
      },
      (err: any) => {
        alert('Something went wrong');
        this.router.navigate(['/loginPage']);
      }
    );
 }
}
