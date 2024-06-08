import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClientAccountService } from '../../../services/client-account.service';
@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss'],
})
export class AccountOpeningComponent {
  model: any = {};

  constructor(
    private clientaccountService: ClientAccountService,
    private router: Router
  ) {}

  onSubmit() {
    this.clientaccountService.createAccount(this.model).subscribe(
      (response: any) => {
        console.log('Account created', response);
        this.router.navigate(['/registration-success']);
      },
      (error: any) => {
        console.error('Error creating account', error);
      }
    );
  }
}
