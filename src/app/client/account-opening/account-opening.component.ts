import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ClientAccountService} from "../../Service/client-account.service";
@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.css'],
})
export class AccountOpeningComponent {
  model: any = {};

  constructor(
    private clientaccountService: ClientAccountService,
    private router: Router
  ) {}

  onSubmit() {
    // Use the service to create the account
    this.clientaccountService.createAccount(this.model).subscribe(
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
