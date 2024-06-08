import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientAccountService } from '../../../Service/client-account.service';

@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.css'],
})
export class AccountOpeningComponent {
  model: any = {
    accountType: 0, // Ensure this matches the enum mapping expected by the backend
    cin: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    requiresPasswordChange: true,
  };


  constructor(private clientAccountService: ClientAccountService, private router: Router) {}

  onSubmit() {
    console.log('Submitting form:', this.model);
    this.clientAccountService.createAccount(this.model).subscribe(
      (response: any) => {
        console.log('Account created', response);
        this.router.navigate(['/registration-success']);
      },
      (error: any) => {
        console.error('Error creating account', error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    );
  }
}
