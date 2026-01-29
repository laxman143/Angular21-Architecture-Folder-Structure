import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Auth } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(Auth);
  const isLogin = localStorage.getItem("isLogin")
  const  login =  isLogin == "true" ? true : false;
  const token = 'test'
  
  const authReq = login ? req.clone({
    setHeaders : {
      Authentication : `Bearer ${token}`
    }
  }): req;

   return next(authReq).pipe(
    catchError((err) => {
      if(err.status === 401){
        authService.logout();
        router.navigate(['/logout'])
      } 
      return throwError(()=> err)
    })
   );
};
