import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-app';
 public name :string = "";
 public password :string = "";
  public store: number[] = [];

  constructor() {
   
   }

  ngOnInit() {
    console.log(this.name,"name is called")
  }
  submitForm() {
    console.log(this.name,"name is called")
    const payload = {
      name: this.name,
      password: this.password
    }
    console.log(payload,"payload is called")
  }
}
