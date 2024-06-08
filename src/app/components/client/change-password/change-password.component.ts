import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  passwordModel: any = {};

  constructor(    private router: Router
  ) {}
  passwordStrength: string = '';

  checkPasswordStrength() {
    const password = this.passwordModel.newPassword;
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

    if (strongRegex.test(password)) {
      this.passwordStrength = 'strong';
    } else if (mediumRegex.test(password)) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'weak';
    }
  }
  getPasswordStrengthLabel() {
    switch (this.passwordStrength) {
      case 'strong':
        return 'Strong';
      case 'medium':
        return 'Medium';
      case 'weak':
        return 'Weak';
      default:
        return '';
    }
  }
  onChangePassword() {
    // Logic to change the password
    console.log('Password changed successfully');
    this.router.navigate(['/login']);
  }
}
