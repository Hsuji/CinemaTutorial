import { Component } from '@angular/core';
import { User } from './../service/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User();

  constructor() { }

  onSubmit(userForm) {
    console.log('userInfo', this.user);
    console.log('userForm', userForm);
  }
}
