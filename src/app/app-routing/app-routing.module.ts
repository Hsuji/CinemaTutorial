import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './../sign-in/sign-in.component';
import { SignUpComponent } from './../sign-up/sign-up.component';

const routes: Routes = [
  {path: 'singIn', component: SignInComponent},
  {path: 'singUp', component: SignUpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
