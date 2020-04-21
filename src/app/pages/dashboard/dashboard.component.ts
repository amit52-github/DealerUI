import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
 
  constructor(private route:Router) {}

  ngOnInit() {
  
    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.route.navigate(['']);
    }
   
  }

}
