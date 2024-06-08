import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAccountService } from '../../../Service/client-account.service';
import {UserSessionService} from "../../../Service/user-session/user-session.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  passwordModel: any = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  passwordStrength: string = '';
  phone=this.userSessionService.getPhoneNumber()

  constructor(private clientAccountService: ClientAccountService, private router: Router,    private userSessionService: UserSessionService
  ) {
  }
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
    const { currentPassword, newPassword, confirmNewPassword} = this.passwordModel;
    if (newPassword !== confirmNewPassword) {
      console.error('New password and confirm password do not match');
      return;
    }

    console.log('passwordModel:', this.passwordModel); // Ajout du log ici pour vérifier le modèle
    this.clientAccountService.changePassword(this.phone, currentPassword, newPassword,confirmNewPassword).subscribe(
      (response: any) => {
        console.log('Password changed successfully', response);
        this.router.navigate(['/login']); // Naviguer vers la page de connexion en cas de succès
      },
      (error: any) => {
        console.error('Error changing password', error);
      }
    );
  }
}




