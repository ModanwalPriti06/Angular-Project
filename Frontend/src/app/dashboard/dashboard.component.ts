// import { Component, OnInit } from '@angular/core';



// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit{
//   cards:any[];


//   constructor(private router: Router){

//   }
//   ngOnInit(): void {
//     this.getDataFromBackend();
//   }

//   getDataFromBackend(): void {
//     axios.get('http://localhost:5001/dashboard')
//     .then(response => {
//       // Handle the response data
//    this.cards=response.data
//     })
//     .catch(error => {
//       // Handle the error
//       console.log(error, "error");
//     });

//   }


//   homepage(){
//     this.router.navigate(['/homepage']);
//    }

// }



// homepage(){
//   this.router.navigate(['/homepage']);
//  }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(): void {
    axios
      .get('http://localhost:5001/dashboard')
      .then(response => {
        // Handle the response data
        this.cards = response.data;
        console.log(this.cards, "response dashboard data");
      })
      .catch(error => {
        // Handle the error
        console.log(error, "error");
      });
  }

  homepage(): void {
    this.router.navigate(['/homepage']);
  }
}

