import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { OtpLoginComponent } from './pages/otp-login/otp-login.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { TablesComponent } from './pages/tables/tables.component';


const routes: Routes = [
  
  {
    path: "",
    component: LoginPageComponent},
    {
      path: "otpLogin",
      component: OtpLoginComponent},
    { path: "viewpage", component: ViewPageComponent },
    
  {
    path: "dashBoardTemp",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: "approved", component: TypographyComponent },
  { path: "rejected", component: TablesComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { 
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
