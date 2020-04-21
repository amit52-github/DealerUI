import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/http-client.service';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading: any;
  invalidLogin: boolean = false;
  public isOnline: boolean = navigator.onLine;

  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:HttpClientService) { }

  ngOnInit() {

    console.log("nertwork connection ::: "+this.isOnline); 
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
   });
   
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    
    this.submitted = true;
    console.log("onSubmit");

       // stop here if form is invalid
       
       if (this.loginForm.invalid) {
        return;}
        
const loginPayload = {
  username: this.f.username.value,
  password: this.f.password.value
}

// this.router.navigate(['dashboard']);
  this.apiService.login(loginPayload).subscribe(data=>{
   
    if(data['status']=='success') {
     
      this.router.navigate(['dashboard']);
     console.log("login username:::"+this.f.username.value);
     sessionStorage.clear();
        sessionStorage.setItem('username',this.f.username.value);
    }else {
      this.invalidLogin = true;
      alert("Please insert correct username and password !..")
      this.router.navigate(['']);
    }
  });

    // // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.Stringify(this.loginForm.value, null, 4));
}


}
