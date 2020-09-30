import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
//import { EmployeeCreateComponent } from '../../employees/employee-create/employee-create.component';
//import { CpcCreateComponent} from '../../cpcs/cpc-create/cpc-create.component';
import {CpcsComponent} from '../../cpcs/cpcs.component';
import{CpcSousClassesComponent} from '../../cpc-sous-classes/cpc-sous-classes.component';
import{CpcClasseComptablesComponent} from '../../cpc-classe-comptables/cpc-classe-comptables.component';
import{ClasseComptablesComponent} from '../../classe-comptables/classe-comptables.component';
import{SousClasseComptablesComponent} from '../../sous-classe-comptables/sous-classe-comptables.component';
import{OperationComptablesComponent} from '../../operation-comptables/operation-comptables.component';
import { from } from 'rxjs';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  //{ path: "employee-create", component: EmployeeCreateComponent }
  //{ path: "cpc-create" , component: CpcCreateComponent},
  {path : "Cpcs" , component:CpcsComponent},
  {path:"CpcSousClasses", component:CpcSousClassesComponent},
  {path:"CpcClasseComptables", component:CpcClasseComptablesComponent},
  {path:"ClasseComptables" , component:ClasseComptablesComponent},
  {path:"SousClasseComptables" , component:SousClasseComptablesComponent},
  {path:"OperationComptables" , component:OperationComptablesComponent}

  // { path: "rtl", component: RtlComponent }
];
