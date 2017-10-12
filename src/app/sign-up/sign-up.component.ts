/**
 * 회원가입 화면
 * 화면ID : singUp
 */
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { User } from './../service/user';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userForm: FormGroup;

  user = new User();
  userService = new UserService();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ])],
      passwordChk: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ])]
    });
  }

  onSubmit() {
    if (this.userForm.status === 'VALID'
      && this.userForm.get('password').value === this.userForm.get('passwordChk').value) {
        //db에 user insert
        this.userService.insertUser(this.user);
    }
  }
  
}
