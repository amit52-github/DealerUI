import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";

import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";

import { RegistrationFormComponent } from 'src/app/pages/registration-form/registration-form.component';
import { Tab1Component } from 'src/app/pages/tab1/tab1.component';
import { Tab2Component } from 'src/app/pages/tab2/tab2.component';
import { Tab3Component } from 'src/app/pages/tab3/tab3.component';
import { ViewPageComponent } from 'src/app/pages/view-page/view-page.component';
import { DealerPendingComponent } from 'src/app/pages/dealer-pending/dealer-pending.component';
import { SaveDataListComponent } from 'src/app/pages/save-data-list/save-data-list.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "registration-form", component: RegistrationFormComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  // { path: "tables", component: TablesComponent },
  { path: "tab1", component: Tab1Component },
  { path: "tab2", component: Tab2Component },
  { path: "tab3", component: Tab3Component },
  { path: "dealer_pending", component: DealerPendingComponent },
  { path: "saveData_list", component: SaveDataListComponent }
  //{ path: "viewpage", component: ViewPageComponent }
  // { path: "rtl", component: RtlComponent }
];
