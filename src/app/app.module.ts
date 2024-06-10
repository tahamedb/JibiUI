import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountOpeningComponent } from './components/client/account-opening/account-opening.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationSuccessComponent } from './components/client/registration-success/registration-success.component';
import { LoginComponent } from './components/client/login/login.component';
import { ChangePasswordComponent } from './components/client/change-password/change-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatLineModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";
import { ProfileComponent } from './components/client/profile/profile.component';
import {MatCardModule} from "@angular/material/card";
import { QRCodeModule } from 'angularx-qrcode';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import { ClientHomepageComponent } from './components/client/client-homepage/client-homepage.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { DynamicFormComponent } from './components/client/dynamic-form/dynamic-form.component';
import {FactureFormComponent} from "./components/client/facture-form/facture-form.component";
import { TransactionHistoryComponent } from './components/client/transaction-history/transaction-history.component';
import {CommonModule, DatePipe, NgOptimizedImage} from "@angular/common";
import {QrCodeScannerComponent} from "./components/client/qr-code-scanner/qr-code-scanner.component";
import {TransferComponent} from "./components/client/transfer/transfer.component";
import { HomepageComponent } from './components/homepage/homepage.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
@NgModule({
  declarations: [
    AppComponent,
    AccountOpeningComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    ClientHomepageComponent,
    DynamicFormComponent,
    FactureFormComponent,
    TransactionHistoryComponent,
    RegistrationSuccessComponent,
    ChangePasswordComponent,
    QrCodeScannerComponent,
    TransferComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatLineModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    QRCodeModule,
    MatProgressSpinnerModule,
    BrowserModule,
    RouterLink,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgxTypedJsModule,
    NgOptimizedImage,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
