import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild("userForm") form: any;


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

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000)
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value }: { value: User }) {

    value.isActive = true;
    value.registered = new Date();
    value.hide = true;

    this.users.unshift(value);
    this.form.reset();

  }

}
