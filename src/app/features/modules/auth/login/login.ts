import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup<{
    email: FormControl<string>,
    password: FormControl<string>;
  }>

  constructor(private fb:FormBuilder,private router:Router){
  this.loginForm = this.fb.nonNullable.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
});
  }

  submit(){
    localStorage.setItem("isLogin", "true");
    this.router.navigate(['/'])
  }
}
