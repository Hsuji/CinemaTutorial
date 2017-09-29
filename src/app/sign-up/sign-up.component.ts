import { User } from './../service/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string;
  emaul: string;
  password: string;

  constructor() { }

  onSubmit() {
  }
}
