import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ClientHomepageComponent} from "./client/client-homepage/client-homepage.component";
import {DynamicFormComponent} from "./client/dynamic-form/dynamic-form.component";
import {FactureFormComponent} from "./client/facture-form/facture-form.component";
import {TransactionHistoryComponent} from "./client/transaction-history/transaction-history.component";
import {ChangePasswordComponent} from "./client/change-password/change-password.component";
import {LoginComponent} from "./client/login/login.component";
import {RegistrationSuccessComponent} from "./client/registration-success/registration-success.component";
import {AccountOpeningComponent} from "./client/account-opening/account-opening.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: ClientHomepageComponent,
  },
  {
    path: 'creance/:id/:type',
    component: DynamicFormComponent,
  },
  {
    path: 'facture',
    component: FactureFormComponent,
  },
  {
    path: 'historique',
    component: TransactionHistoryComponent,
  },
  { path: 'account-opening', component: AccountOpeningComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
