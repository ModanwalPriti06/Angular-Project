import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
       name: this.name,
       password: this.password
     }
     console.log(payload,"payload is called")
     this.router.navigate(['/dashboard']);

   }
   signForm(){
    this.router.navigate(['/sign']);


   }

}
