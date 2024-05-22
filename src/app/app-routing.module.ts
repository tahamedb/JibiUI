import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationSuccessComponent } from './components/client/registration-success/registration-success.component';
import { AccountOpeningComponent } from './components/client/account-opening/account-opening.component';
import { LoginComponent } from './components/client/login/login.component';
import { ChangePasswordComponent } from './components/client/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/account-opening', pathMatch: 'full' },
  { path: 'account-opening', component: AccountOpeningComponent },
  { path: 'registration-success', component: RegistrationSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
