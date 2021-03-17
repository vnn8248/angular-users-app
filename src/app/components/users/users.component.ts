import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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


  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
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

    this.dataService.addUser(value);
    this.form.reset();

  }

}
