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
        image: 'https://picsum.photos/id/1012/300'
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
        image: 'https://picsum.photos/id/1001/300'
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
        image: 'https://picsum.photos/id/1013/300'
      }
    ];
  }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000)
  }

}
