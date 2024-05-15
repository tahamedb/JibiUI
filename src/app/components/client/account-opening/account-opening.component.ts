import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.css'],
})
export class AccountOpeningComponent {
  model: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http
      .post('http://localhost:8080/clients/register', this.model)
      .subscribe(
        (response) => {
          console.log('Account created', response);
          this.router.navigate(['/registration-success']);
        },
        (error) => {
          console.error('Error creating account', error);
        }
      );
  }
}
