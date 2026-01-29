import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // private _isLoggedIn = signal<boolean>(false);
   private _isLoggedIn = signal<boolean>(
    localStorage.getItem("isLogin") === 'true'
  );

  isLoggedIn = this._isLoggedIn.asReadonly();

  login():void{
    this._isLoggedIn.set(true)
    localStorage.setItem("isLogin","true")
  }

  logout():void {
    this._isLoggedIn.set(false);
    localStorage.removeItem("isLogin")
  }
}


