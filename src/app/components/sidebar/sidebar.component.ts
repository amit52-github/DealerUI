import { Component, OnInit } from "@angular/core";
import { ComponentsModule } from '../components.module';

declare interface RouteInfo {
  path: String;
  title: String;
  rtlTitle: String;
  icon: String;
  class: String;
}
export const ROUTES: RouteInfo[] = [
 
  {
    path: "/dashboard",
    title: "Home",
    rtlTitle: "CUSTOMER INFORMATION SYSTEM",
    icon: "tim-icons icon-bank",
    class: ""
  },
  {
    
    path: "/registration-form",
    title: "DEALER REGISTRATION",
    rtlTitle: "CUSTOMER INFORMATION SYSTEM",
    icon: "icon-single-02",
    class: ""
  },
  {
    
    path: "/saveData_list",
    title: "Saved Entries",
    rtlTitle: "CUSTOMER INFORMATION SYSTEM",
    icon: "icon-single-02",
    class: ""
  },
  {
    
    path: "/dealer_pending",
    title: "DEALER CREATION STATUS REPORT",
    rtlTitle: "CUSTOMER INFORMATION SYSTEM",
    icon: "icon-bullet-list-67",
    class: ""
  },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   rtlTitle: "CUSTOMER INFORMATION SYSTEM",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
userName:string;
  constructor() {}

  ngOnInit() {
   this.userName= sessionStorage.getItem("username");
   console.log("Sideb are user::"+this.userName);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
