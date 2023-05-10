import { Car } from './../model/bookingCarModel';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css'],
})
export class BookcarComponent {
  public carBookingForm!: FormGroup;
  cars: Car[] = [];
  userData: any;

  constructor(
    private myrouter: Router,
    private formbuilder: FormBuilder,
    private myservice: NewserviceService
  ) {}

  ngOnInit() {

    this.userData = JSON.parse(localStorage.getItem('userData') || '');
    console.log(this.userData);

    this.carBookingForm = this.formbuilder.group({
      email: this.formbuilder.control(''),
      name: this.formbuilder.control(''),
      pickup: this.formbuilder.control(''),
      drop: this.formbuilder.control(''),
      payby: this.formbuilder.control(''),
      address: this.formbuilder.control(''),
      phone: this.formbuilder.control(''),
      seats: this.formbuilder.control(''),
      coupon: this.formbuilder.control(''),
      date: this.formbuilder.control(''),
    });
  }

  bookCar() {
    let bookingDetails: Car = {
      email: this.userData.email,
      name: this.userData.name,
      phone: this.userData.phone,
      address: this.userData.address,
      pickup: this.pickup.value,
      drop: this.drop.value,
      seats: this.seats.value,
      coupon: this.coupon.value,
      payby: this.payby.value,
      date: this.date.value,
      id: 0,
    };
    console.log(bookingDetails);

    this.myservice.carBooking(bookingDetails).subscribe((data: Car) => {
      this.cars.unshift(data);
      this.clearForm();
      this.myrouter.navigate(["/thankyou"]);
    });
  }

  setForm(car: Car) {
    this.name.setValue(car.name);
    this.email.setValue(car.email);
    this.phone.setValue(car.phone);
    this.address.setValue(car.address);
    this.pickup.setValue(car.pickup);
    this.drop.setValue(car.drop);
    this.payby.setValue(car.payby);
    this.seats.setValue(car.seats);
    this.coupon.setValue(car.coupon);
    this.date.setValue(car.date);
  }

  clearForm() {
    this.name.setValue('');
    this.email.setValue('');
    this.phone.setValue('');
    this.address.setValue('');
    this.pickup.setValue('');
    this.drop.setValue('');
    this.payby.setValue('');
    this.seats.setValue('');
    this.coupon.setValue('');
    this.date.setValue('');
  }

  public get name(): FormControl {
    return this.carBookingForm.get('name') as FormControl;
  }

  public get email(): FormControl {
    return this.carBookingForm.get('email') as FormControl;
  }

  public get phone(): FormControl {
    return this.carBookingForm.get('phone') as FormControl;
  }

  public get address(): FormControl {
    return this.carBookingForm.get('address') as FormControl;
  }

  public get pickup(): FormControl {
    return this.carBookingForm.get('pickup') as FormControl;
  }

  public get drop(): FormControl {
    return this.carBookingForm.get('drop') as FormControl;
  }

  public get seats(): FormControl {
    return this.carBookingForm.get('seats') as FormControl;
  }

  public get payby(): FormControl {
    return this.carBookingForm.get('payby') as FormControl;
  }

  public get coupon(): FormControl {
    return this.carBookingForm.get('coupon') as FormControl;
  }

  public get date(): FormControl {
    return this.carBookingForm.get('date') as FormControl;
  }
}
