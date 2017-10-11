/**
 * 회원가입 화면
 * 화면ID : singUp
 */
import { Component } from '@angular/core';
import { User } from './../service/user';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User();
  userService = new UserService(); 

  constructor() { }

  onSubmit(username, email, password, passwordChk) {
    //db에 user insert
    this.userService.insertUser(this.user);
  }
}
