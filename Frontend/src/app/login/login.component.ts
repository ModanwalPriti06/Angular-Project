import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'my-app';
  public name :string = "";
  public password :string = "";
   public store: number[] = [];
 
   constructor(private router: Router) {
    }
 
   ngOnInit() {
     console.log(this.name,"name is called")
   }
   loginForm() {
     console.log(this.name,"name is called")
     const payload = {
       fullname: this.name,
       password: this.password
     }
    if(payload.fullname==='' || payload.password===''){
      alert('please enter field')
    }
    else{
     this.router.navigate(['/dashboard']);
    }

     axios.get('http://localhost:5001/signin', {params:payload})
  .then(response => {
    // Handle the response data
    console.log(response.data, "response data");
  })
  .catch(error => {
    // Handle the error
    console.log(error, "error");
  });

   }
  
   signForm(){
    this.router.navigate(['/sign']);

   }

}
