import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  profileForm : FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  emailExists: boolean = false;

  constructor(private formBuilder:FormBuilder,private regService:SharedServiceService,
    private router:Router){}

  ngOnInit(){

    this.profileForm = this.formBuilder.group(
      {
      Name : ['',[Validators.required,Validators.minLength(2)]],
      Age : ['',Validators.required],
      Contact :['',[
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]],
      username:['',[Validators.required,Validators.minLength(6)]],
      Email :['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(8)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }
  
  onRegSubmit(){
    this.submitted = true;
     if(this.profileForm.invalid){
      return
    }

    let data = this.profileForm.value;
    this.regService.post(data).subscribe((data)=>{

    })
    console.log(this.profileForm.value);
    // this.router.navigateByUrl('regSuccess');
 
    
      const email = this.profileForm.value.Email;
  
      
      
    
       
  }
}


