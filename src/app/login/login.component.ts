import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

   
  constructor(private formBuilder: FormBuilder,private router: Router,
    private logService:SharedServiceService){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['',[Validators.required, Validators.minLength(6)],],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[ Validators.required,Validators.minLength(8)], ],  
      },
      
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password')
  }

  onLogSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
  }
   
  Reg(){
    this.router.navigateByUrl('register');
  }
}
