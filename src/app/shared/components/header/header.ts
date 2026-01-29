import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnInit {
   
   authService = inject(Auth);
   isLogged = this.authService.isLoggedIn;

  constructor(private router:Router) {
    console.log("islogged",this.isLogged)
    // this.isLogged = localStorage.getItem('isLogin') === 'true';
  }

  ngOnInit() {
   
  }

  logout() {
    localStorage.removeItem('isLogin');
   this.authService.logout();
    this.router.navigate(['/login'])
  }
}
