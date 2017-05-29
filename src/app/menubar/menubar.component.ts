import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.less']
})
export class MenubarComponent implements OnInit {

  constructor(private authServ: AuthenticationService, private router: Router) { }
  
  user: Observable<firebase.User>;

  ngOnInit() {
    this.user = this.authServ.authUser();
  }

  signout() {
    this.authServ.logout().then(onResolve => this.router.navigate(['/']));
  }

}
