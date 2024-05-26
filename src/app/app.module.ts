import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClientHomepageComponent } from './client/client-homepage/client-homepage.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { DynamicFormComponent } from './client/dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FactureFormComponent} from "./client/facture-form/facture-form.component";
import { TransactionHistoryComponent } from './client/transaction-history/transaction-history.component';
import {CommonModule, DatePipe} from "@angular/common";
import {ChangePasswordComponent} from "./client/change-password/change-password.component";
import {LoginComponent} from "./client/login/login.component";
import {RegistrationSuccessComponent} from "./client/registration-success/registration-success.component";
import {AccountOpeningComponent} from "./client/account-opening/account-opening.component";

@NgModule({
  declarations: [
    AppComponent,
    ClientHomepageComponent,
    DynamicFormComponent,
    FactureFormComponent,
    TransactionHistoryComponent,
    AccountOpeningComponent,
    RegistrationSuccessComponent,
    LoginComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
