import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor: String = "yellow";
  menuItems = [{
    path: "/dashboard",
    title: "Home",
    rtlTitle: "CUSTOMER INFORMATION SYSTEM",
    icon: "tim-icons icon-bank",
    class: ""
  }];
  constructor() {}
  changeSidebarColor(color){
    debugger;
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;
console.log("sidebarColor::"+this.sidebarColor);
    if(sidebar != undefined){
        sidebar.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    debugger;
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {
    
    this.menuItems = [{
      path: "/dashboard",
      title: "Home",
      rtlTitle: "CUSTOMER INFORMATION SYSTEM",
      icon: "tim-icons icon-bank",
      class: ""
    }];
  }
}
