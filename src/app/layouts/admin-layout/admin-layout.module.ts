import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
// import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RegistrationFormComponent } from 'src/app/pages/registration-form/registration-form.component';
import { Tab1Component } from 'src/app/pages/tab1/tab1.component';
import { Tab2Component } from 'src/app/pages/tab2/tab2.component';
import { Tab3Component } from 'src/app/pages/tab3/tab3.component';
import { DealerPendingComponent } from 'src/app/pages/dealer-pending/dealer-pending.component';
import { SaveDataListComponent } from 'src/app/pages/save-data-list/save-data-list.component';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    RegistrationFormComponent,
    UserComponent,
    // TablesComponent,
    IconsComponent,
    NotificationsComponent,
    Tab1Component,
    Tab2Component, 
    Tab3Component,
    DealerPendingComponent,
    SaveDataListComponent
   // ViewPageComponent
    
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
