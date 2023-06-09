import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  public mobile :string = "";

 
   constructor(private router: Router) {
    
    }
 
   ngOnInit() {
     console.log(this.name,"name is called")
   }
   signForm() {
     console.log(this.name,"name is called")
     const payload = {
       name: this.name,
       password: this.password,
       confirmPassword:this.confirmPassword,
      email: this.email,
      mobile:this.mobile
     }
     console.log(payload,"payload is called")
     this.router.navigate(['/login']);
   }
   loginForm(){
    // if (this.name==="") {
    //   console.log("sorry fill username")
    // }

    this.router.navigate(['/login']);


   }
 

}

