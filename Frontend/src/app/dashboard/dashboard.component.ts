
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

//  deleteCard(cardId: number): void {
//     axios.delete(`http://localhost:5001/${cardId}`)
//       .then(response => {
//         // Handle the successful deletion
//         console.log('Card deleted successfully:', response.data);
//         // Remove the deleted card from the local array
//         const index = this.cards.findIndex(card => card.id === cardId);
//         if (index > -1) {
//           this.cards.splice(index, 1);
//         }
//       })
//       .catch(error => {
//         // Handle the error
//         console.error('Error deleting card:', error);
//       });
//   }

  homepage(): void {
    this.router.navigate(['/homepage']);
  }
}

