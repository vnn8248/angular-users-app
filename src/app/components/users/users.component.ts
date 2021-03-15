import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};


  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'Ma'
        },
        image: 'https://picsum.photos/id/1012/300',
        isActive: true,
        balance: 100,
        registered: new Date("01/02/2018 08:30:00")
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        age: 32,
        address: {
          street: '51 Main st',
          city: 'Boston',
          state: 'Ma'
        },
        image: 'https://picsum.photos/id/1001/300',
        isActive: false,
        balance: 200,
        registered: new Date("02/03/2018 09:30:00")
      },
      {
        firstName: "Amy",
        lastName: "Williams",
        age: 49,
        address: {
          street: '52 Main st',
          city: 'Boston',
          state: 'Ma'
        },
        image: 'https://picsum.photos/id/1013/300',
        isActive: true,
        balance: 300,
        registered: new Date("03/04/2019 10:30:00")
      }
    ];

    this.currentClasses = {};
    this.currentStyles = {};
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000)

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-success": this.enableAdd
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? '0' : '40px',
      "font-size": this.showExtended ? '' : '40px'
    }
  }
}
