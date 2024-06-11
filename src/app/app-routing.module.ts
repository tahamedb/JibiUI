import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationSuccessComponent } from './components/client/registration-success/registration-success.component';
import { AccountOpeningComponent } from './components/client/account-opening/account-opening.component';
import { LoginComponent } from './components/client/login/login.component';
import { ChangePasswordComponent } from './components/client/change-password/change-password.component';
import {ProfileComponent} from "./components/client/profile/profile.component";
import {DynamicFormComponent} from "./components/client/dynamic-form/dynamic-form.component";
import {ClientHomepageComponent} from "./components/client/client-homepage/client-homepage.component";
import {FactureFormComponent} from "./components/client/facture-form/facture-form.component";
import {TransactionHistoryComponent} from "./components/client/transaction-history/transaction-history.component";
import {TransferComponent} from "./components/client/transfer/transfer.component";
import {QrCodeScannerComponent} from "./components/client/qr-code-scanner/qr-code-scanner.component";
import {AgentChangePasswordComponent} from "./components/agent/agent-change-password/agent-change-password.component";
import {OtpvalidationComponent} from "./components/agent/otpvalidation/otpvalidation.component";
import {AuthGuard} from "./Service/authguard.service";
import {RegistrationComponent} from "./components/agent/registration/registration.component";
import {LoginAgentComponent} from "./components/agent/login_admin/login.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {CreditCardComponent} from "./components/credit-card/credit-card.component";

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
    path: 'credit',
    component: CreditCardComponent,
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
  },  { path: 'account-opening', component: AccountOpeningComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'transfert', component: TransferComponent },
  { path: 'p-wallet', component: QrCodeScannerComponent },
  {path:'add-agent',component:RegistrationComponent, canActivate: [AuthGuard], data: { role: 'ROLE_BACKOFFICE' }},
  { path: 'otp-validation', component: OtpvalidationComponent }, // Page de validation OTP
  { path: 'agent-change-password', component: AgentChangePasswordComponent }, // Page de changement de mot de passe de l'agent
  { path: 'loginAgent', component: LoginAgentComponent },
  { path: 'qr-scanner', component: QrCodeScannerComponent },
  { path: 'client-account-creation', component: AccountOpeningComponent },
  {
    path: 'acceuil',
    component: ClientHomepageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
