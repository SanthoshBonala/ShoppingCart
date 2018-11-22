import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) { }
  username: string;
  password: string;
  isLoggedIn: Boolean;
  ngOnInit() { }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.loginservice.login()
      this.router.navigate(["dashboard"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
