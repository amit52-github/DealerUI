import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { Tab1Component } from '../tab1/tab1.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {




  constructor(private tab:HttpClientService,public tabset: NgbTabset,private route:Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.route.navigate(['']);
    }
  }
  ngAfterViewInit() {
    // this.tab1=this.tab1Val;
    // this.tab2=this.tab2Val;
    // this.tab3=this.tab3Val;
    // console.log("tab1Val:::"+this.tab1Val);
  }


  nextTab2(){
    this.tabset.select("tab2id");
  }

}
