import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/http-client.service';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.scss']
})
export class OtpLoginComponent implements OnInit {

  otpLogin: FormGroup;

  submitted = false;

  loading: any;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:HttpClientService) { }

  ngOnInit() {
   
    sessionStorage.clear();
    this.otpLogin = this.formBuilder.group({
      otp:['', Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{6}$/),Validators.minLength(6),Validators.maxLength(6)])]

      
   });
  }

  get f() { return this.otpLogin.controls; }
  
  onSubmit(){
    this.submitted = true;
    if (this.otpLogin.invalid) {
      return;
    }

    // this.router.navigate(['viewpage']);

const otp={otp:this.otpLogin.value.otp};


      this.apiService.otpLogin(otp).subscribe(data=>{
      console.log("OTP Login Id :: "+data)
        if(data.length>0) {
          sessionStorage.setItem('dealerId',data);
         this.router.navigate(['viewpage']);
        // window.open()
        }else {
          this.invalidLogin = true;
          alert("OTP is invalid or already used.")
          this.router.navigate(['otpLogin']);
        }
      });
  }

}
