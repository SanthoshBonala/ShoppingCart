import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn: Boolean = false;
  constructor(private router: Router) { }
  getStatus(){
    return this.isLoggedIn
  }
  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
    this.router.navigate(["login"])
  }
}
