import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { CpcsComponent } from './components/cpcs/cpcs.component';
import { CpcCreateComponent } from './components/cpcs/cpc-create/cpc-create.component';
import { CpcListComponent } from './components/cpcs/cpc-list/cpc-list.component';
import { CpcClasseComptablesComponent } from './components/cpc-classe-comptables/cpc-classe-comptables.component';
import { CpcClasseComptableCreateComponent } from './components/cpc-classe-comptables/cpc-classe-comptable-create/cpc-classe-comptable-create.component';
import { CpcClasseComptableListComponent } from './components/cpc-classe-comptables/cpc-classe-comptable-list/cpc-classe-comptable-list.component';
import { ClasseComptablesComponent } from './components/classe-comptables/classe-comptables.component';
import { ClasseComptableCreateComponent } from './components/classe-comptables/classe-comptable-create/classe-comptable-create.component';
import { ClasseComptableListComponent } from './components/classe-comptables/classe-comptable-list/classe-comptable-list.component';
import { SousClasseComptablesComponent } from './components/sous-classe-comptables/sous-classe-comptables.component';
import { SousClasseComptableCreateComponent } from './components/sous-classe-comptables/sous-classe-comptable-create/sous-classe-comptable-create.component';
import { SousClasseComptableListComponent } from './components/sous-classe-comptables/sous-classe-comptable-list/sous-classe-comptable-list.component';
import { OperationComptablesComponent } from './components/operation-comptables/operation-comptables.component';
import { OperationComptaableCreateComponent } from './components/operation-Comptables/operation-comptaable-create/operation-comptaable-create.component';
import { OperationComptaableListComponent } from './components/operation-Comptables/operation-comptaable-list/operation-comptaable-list.component';
import { CompteComptablesComponent } from './components/compte-comptables/compte-comptables.component';
import { CompteComptableCreateComponent } from './components/compte-comptables/compte-comptable-create/compte-comptable-create.component';
import { CompteComptableListComponent } from './components/compte-comptables/compte-comptable-list/compte-comptable-list.component';
import { CpcSousClassesComponent } from './components/cpc-sous-classes/cpc-sous-classes.component';
import { CpcSousClasseCreateComponent } from './components/cpc-sous-classes/cpc-sous-classe-create/cpc-sous-classe-create.component';
import { CpcSousClasseListComponent } from './components/cpc-sous-classes/cpc-sous-classe-list/cpc-sous-classe-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OperationComptableRechercheV1Component } from './components/operation-comptables/operation-comptable-recherche-v1/operation-comptable-recherche-v1.component';
import { OperationComptableRechercheV2Component } from './components/operation-comptables/operation-comptable-recherche-v2/operation-comptable-recherche-v2.component';
import { OperationComptableRechercheV3Component } from './components/operation-comptables/operation-comptable-recherche-v3/operation-comptable-recherche-v3.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent, 
    CpcsComponent, 
    CpcCreateComponent,
    CpcListComponent, 
    CpcSousClassesComponent,
    CpcSousClasseCreateComponent, 
    CpcSousClasseListComponent, 
    CpcClasseComptablesComponent, 
    CpcClasseComptableCreateComponent,
    CpcClasseComptableListComponent, 
    ClasseComptablesComponent, 
    ClasseComptableCreateComponent, 
    ClasseComptableListComponent, 
    SousClasseComptablesComponent, 
    SousClasseComptableCreateComponent, 
    SousClasseComptableListComponent,
    OperationComptablesComponent, 
    OperationComptaableCreateComponent, 
    OperationComptaableListComponent, 
    CompteComptablesComponent,
    CompteComptableCreateComponent,
    CompteComptableListComponent,
    LoginComponent,
    RegisterComponent,
    OperationComptableRechercheV1Component,
    OperationComptableRechercheV2Component,
    OperationComptableRechercheV3Component 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
