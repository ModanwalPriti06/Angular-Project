import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public name :string = "";
  public password :string = "";
  public confirmPassword :string = "";
  public email :string = "";
  public mobile :Number = 0;

   constructor(private router: Router, private http:HttpClient) {
    
    }
 
   ngOnInit() {
     console.log(this.name,"name is called")
   }
   register() {
     console.log(this.name,"name is called")
     const payload = {
       fullname: this.name,
       password: this.password,
      email: this.email,
      mobile:this.mobile,
     }
     console.log(payload,"payload is called")
     this.router.navigate(['/login']);

     
   axios.post('http://localhost:5001/signup', payload)
  .then(response => {
    // Handle the response data
    console.log(response.data, "response data");
  })
  .catch(error => {
    // Handle the error
    console.log(error, "error");
  });

   }
   loginForm(){
    this.router.navigate(['/login']);

   }
 

}

