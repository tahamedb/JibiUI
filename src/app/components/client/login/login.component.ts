import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAccountService } from 'src/app/Service/client-account.service';
import {UserSessionService} from "../../../Service/user-session/user-session.service";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModel: any = {
    phone: '',
    password: ''
  };

  constructor(
    private router: Router,
    private clientAccountService: ClientAccountService,
    private userSessionService: UserSessionService
  ) {}

  onLogin() {
console.log(this.loginModel.phone)
    this.clientAccountService.login(this.loginModel).subscribe(
      (response: any) => {
        console.log('Login response:', response);

        this.userSessionService.setPhoneNumber(this.loginModel.phone);
        this.userSessionService.setClient(response.client);
        if (response.isFirstTime) {
          this.router.navigate(['/change-password']);
        } else {
          // Handle regular login flow (redirect to dashboard, etc.)
          window.location.href = '/homepage';
        }
      },
      (error: any) => {
        console.error('Login error', error);
      }
    );
  }
}
