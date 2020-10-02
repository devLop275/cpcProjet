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

import { from } from 'rxjs';
import { CpcsComponent } from 'src/app/components/cpcs/cpcs.component';
import { CpcSousClasseListComponent } from 'src/app/components/cpc-sous-classes/cpc-sous-classe-list/cpc-sous-classe-list.component';
import { CpcClasseComptablesComponent } from 'src/app/components/cpc-classe-comptables/cpc-classe-comptables.component';
import { ClasseComptablesComponent } from 'src/app/components/classe-comptables/classe-comptables.component';
import { SousClasseComptablesComponent } from 'src/app/components/sous-classe-comptables/sous-classe-comptables.component';
import { OperationComptablesComponent } from 'src/app/components/operation-comptables/operation-comptables.component';
import { CompteComptablesComponent } from 'src/app/components/compte-comptables/compte-comptables.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { OperationComptaableListComponent } from '../../components/operation-comptables/operation-comptaable-list/operation-comptaable-list.component';

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
  {path:"CpcSousClasses", component:CpcSousClasseListComponent},
  {path:"CpcClasseComptables", component:CpcClasseComptablesComponent},
  {path:"ClasseComptables" , component:ClasseComptablesComponent},
  {path:"SousClasseComptables" , component:SousClasseComptablesComponent},
  {path:"OperationComptables" , component:OperationComptablesComponent},
  {path:"CompteComptables" , component:CompteComptablesComponent},
  {path:"OperationComptableRechercheV2" , component:OperationComptaableListComponent}

  // { path: "rtl", component: RtlComponent }
];
