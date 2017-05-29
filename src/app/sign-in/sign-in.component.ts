import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {

  constructor(private authServ: AuthenticationService, private router: Router) {
  }

  msg: string;
  email: string;
  password: string;

  signin() {
    this.authServ.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['cardView']))
      .catch(error => this.msg = error.message);
  }

}
