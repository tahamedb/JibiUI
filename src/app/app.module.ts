import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountOpeningComponent } from './components/client/account-opening/account-opening.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationSuccessComponent } from './components/client/registration-success/registration-success.component';
import { LoginComponent } from './components/client/login/login.component';
import { ChangePasswordComponent } from './components/client/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountOpeningComponent,
    RegistrationSuccessComponent,
    LoginComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
