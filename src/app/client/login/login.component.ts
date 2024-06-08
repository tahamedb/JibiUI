import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ClientAccountService} from "../../Service/client-account.service";
import {UserSessionService} from "../../Service/user-session/user-session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModel = {
    phone: '',
    password: ''
  }
  constructor(
    private router: Router,
    private clientAccountService: ClientAccountService,
  private userSessionService: UserSessionService

) {}
  onLogin() {
    this.clientAccountService.login(this.loginModel).subscribe(
      (response: any) => {
        this.userSessionService.setPhoneNumber(this.loginModel.phone);
        if (response.isFirstTime) {
          this.router.navigate(['/change-password']); // Change the route here
        } else {
          this.router.navigate(['/homepage']); // Redirect to dashboard or another appropriate page
        }
      },
      (error: any) => {
        console.error('Login error', error);
      }
    );
    console.log(this.loginModel);
  }
}