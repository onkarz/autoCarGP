import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

import Validation from '../featureValidate/validation';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

public signUpForm!: FormGroup;
  email!: string;
  password!: string;
  name!:string ;
  confirmPassword!: string;
  submitted: any;
  showMsg!: boolean;
  phone!:string;
  info!:string;
  address!:string;
  message:any;
  imageURl: any;
  image:any;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    info: new FormControl(''),
    image : new FormControl('')
  });
f: any;

  constructor(private formBuilder: FormBuilder,private myrouter:Router ,private http:HttpClient , private myservice:NewserviceService) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],

        name: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
          ],
        ],
        address: [
          '',
          [
            Validators.required,
          ],
        ],
        image: [
          '',
          [
            Validators.required,
          ],
        ],
        info:[
          '',
          Validators.required,
        ],

        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  getf(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  onSubmit() {
    

    let registerusers = {
      name:this.name,
      image:this.imageURl,
      email:this.email,
      phone:this.phone,
      password:this.password,
      confirmPassword:this.confirmPassword,
      info:this.info,
      address:this.address,
      submitted: this.submitted = true,
    }
     this.submitted = true;
    console.log(registerusers);
   
    this.http.get<any>('http://localhost:3000/posts').subscribe((result) => {
      console.log(result);
      const user = result.find((a: any) => {
        return (
          a.email == this.signUpForm.value.email
        );
      })
      if (user) {
        alert("User is already exist or Try another email.");
       // this.myrouter.navigate(["/login"]);
      }
      else {
        this.myservice.userRegistration(registerusers).subscribe((element)=>{
          console.log(element);
             alert("Registration Successful.");
          //   this.myrouter.navigate(["/login"]);
          //   this.signUpForm.reset();
           });

      }
    },
      (error: any) => {
        alert("Something went wrong");
      }
    );



    if (this.signUpForm.invalid) {
      return;
    }

  }

  onReset(): void {
    this.submitted = false;
    this.signUpForm.reset();
  }

  selectFile(event:any){
    console.log(event);
    var typeOfImg = event.target.files[0].type;
    if(typeOfImg.match(/image\/*/) == null )
    {
      this.message = "only images can add";
      return;
    }
    
    var readImg = new FileReader();
    readImg.readAsDataURL(event.target.files[0]);

    readImg.onload = (_event)=>{
       this.message = "";
       this.imageURl = readImg.result;
       console.log(this.imageURl); 
      }

  }

}
