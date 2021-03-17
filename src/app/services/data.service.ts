import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];


  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin.johnson@gmail.com",
        isActive: false,
        registered: new Date("02/03/2018 09:30:00"),
        hide: true
      },
      {
        firstName: "Amy",
        lastName: "Williams",
        email: "amy.williams@gmail.com",
        isActive: true,
        registered: new Date("03/04/2019 10:30:00"),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
