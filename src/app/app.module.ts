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
import { CpcsComponent } from './cpcs/cpcs.component';
import { CpcCreateComponent } from './cpcs/cpc-create/cpc-create.component';
import { CpcListComponent } from './cpcs/cpc-list/cpc-list.component';
import { CpcSousClassesComponent } from './cpc-sous-classes/cpc-sous-classes.component';
import { CpcSousClasseCreateComponent } from './cpc-sous-classes/cpc-sous-classe-create/cpc-sous-classe-create.component';
import { CpcSousClasseListComponent } from './cpc-sous-classes/cpc-sous-classe-list/cpc-sous-classe-list.component';
import { CpcClasseComptablesComponent } from './cpc-classe-comptables/cpc-classe-comptables.component';
import { CpcClasseComptableCreateComponent } from './cpc-classe-comptables/cpc-classe-comptable-create/cpc-classe-comptable-create.component';
import { CpcClasseComptableListComponent } from './cpc-classe-comptables/cpc-classe-comptable-list/cpc-classe-comptable-list.component';
import { ClasseComptablesComponent } from './classe-comptables/classe-comptables.component';
import { ClasseComptableCreateComponent } from './classe-comptables/classe-comptable-create/classe-comptable-create.component';
import { ClasseComptableListComponent } from './classe-comptables/classe-comptable-list/classe-comptable-list.component';
import { SousClasseComptablesComponent } from './sous-classe-comptables/sous-classe-comptables.component';
import { SousClasseComptableCreateComponent } from './sous-classe-comptables/sous-classe-comptable-create/sous-classe-comptable-create.component';
import { SousClasseComptableListComponent } from './sous-classe-comptables/sous-classe-comptable-list/sous-classe-comptable-list.component';
import { OperationComptablesComponent } from './operation-comptables/operation-comptables.component';
import { OperationComptaableCreateComponent } from './operation-Comptables/operation-comptaable-create/operation-comptaable-create.component';
import { OperationComptaableListComponent } from './operation-Comptables/operation-comptaable-list/operation-comptaable-list.component';

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
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, CpcsComponent, CpcCreateComponent, CpcListComponent, CpcSousClassesComponent, CpcSousClasseCreateComponent, CpcSousClasseListComponent, CpcClasseComptablesComponent, CpcClasseComptableCreateComponent, CpcClasseComptableListComponent, ClasseComptablesComponent, ClasseComptableCreateComponent, ClasseComptableListComponent, SousClasseComptablesComponent, SousClasseComptablesComponent, SousClasseComptablesComponent, SousClasseComptableCreateComponent, SousClasseComptableListComponent, OperationComptablesComponent, OperationComptaableCreateComponent, OperationComptaableListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
