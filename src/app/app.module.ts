import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule, NgbTabset } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OtpLoginComponent } from './pages/otp-login/otp-login.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { ToastrModule } from 'ngx-toastr';
import { TypographyComponent } from './pages/typography/typography.component';
import { TablesComponent } from './pages/tables/tables.component';













@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
    
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginPageComponent, OtpLoginComponent,ViewPageComponent, TablesComponent,   TypographyComponent,],
  providers: [NgbTabset],
  bootstrap: [AppComponent]
})
export class AppModule {}
