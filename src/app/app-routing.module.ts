import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ClientHomepageComponent} from "./client-homepage/client-homepage.component";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {FactureFormComponent} from "./facture-form/facture-form.component";
import {TransactionHistoryComponent} from "./transaction-history/transaction-history.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
