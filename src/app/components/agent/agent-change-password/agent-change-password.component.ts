import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {OtpService} from "../../../Service/otp.service";

@Component({
  selector: 'app-agent-change-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './agent-change-password.component.html',
  styleUrls: ['./agent-change-password.component.css']
})
export class AgentChangePasswordComponent {
  passwordModel = {
    email:'',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };
  message: string | null = null;
  isSuccess: boolean = false;

  constructor(private  otpService: OtpService, private router: Router
  ) {

  }

  onChangePassword(form:NgForm) {
    if (form.valid) {
      if (this.passwordModel.newPassword !== this.passwordModel.confirmNewPassword) {
        this.message = 'New Password and Confirm New Password do not match';
        this.isSuccess = false;
        return;
      }

      this.otpService.changePassword(this.passwordModel.email, this.passwordModel.newPassword).subscribe(
        (response: any) => {
          this.isSuccess = true;
          this.message = 'Password changed successfully';
          // Redirection si nécessaire
          this.router.navigate(['/account-opening']);
        },
        (error: any) => {
          this.isSuccess = false;
          this.message = error.error || 'Error changing password';
        }
      );
    } else {
      console.error('Please fill out the form correctly.');
    }
  }


}
