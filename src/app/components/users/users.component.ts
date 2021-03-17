import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

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
  users: User[] = [];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild("userForm") form: any;


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
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

    this.userService.addUser(value);
    this.form.reset();

  }

}
