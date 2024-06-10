import { Component, OnInit } from '@angular/core';
import { ClientAccountService } from "../../Service/client-account.service";
import {ClientDTO, UserSessionService} from "../../Service/user-session/user-session.service";
import { Creancier } from "../../models/creancier.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | undefined = "";
  balance: number | null = null;

  constructor(
    private userSessionService: UserSessionService,
    private ClientAccountService: ClientAccountService
  ) {}

  ngOnInit(): void {
    const userData: ClientDTO | null = this.userSessionService.getUserData();
    if (userData) {
      this.username = userData.firstname;
      this.fetchBalance();

    }
  }

  fetchBalance(): void {
    const phoneNumber = this.userSessionService.getPhoneNumber();
    if (phoneNumber) {
      this.ClientAccountService.getBalance(phoneNumber).subscribe(
        (balance: number) => {
          this.balance = balance;
        },
        (error) => {
          console.error('Failed to load balance:', error);
        }
      );
    }
  }
}
