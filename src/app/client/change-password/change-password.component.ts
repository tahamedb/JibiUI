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

  onChangePassword() {
    // Logic to change the password
    console.log('Password changed successfully');
    this.router.navigate(['/login']);
  }
}
