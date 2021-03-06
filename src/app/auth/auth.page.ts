import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authServie: AuthService,private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
  this.authServie.onLogin();
  this.router.navigateByUrl('/places/tabs/discover');
  }

}
