import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientHomepageComponent } from './client-homepage/client-homepage.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FactureFormComponent} from "./facture-form/facture-form.component";
import { ConfirmSignatureComponent } from './confirm-signature/confirm-signature.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import {CommonModule, DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ClientHomepageComponent,
    DynamicFormComponent,
    FactureFormComponent,
    ConfirmSignatureComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
