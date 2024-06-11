import { Component, OnInit } from '@angular/core';
import { ClientAccountService } from "../../Service/client-account.service";
import { ClientDTO, UserSessionService } from "../../Service/user-session/user-session.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string | undefined = "";
  balance: number | null = null;
  isLoading: boolean = true;

  constructor(
    private userSessionService: UserSessionService,
    private clientAccountService: ClientAccountService,
    private location : Location
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
      this.clientAccountService.getBalance(phoneNumber).subscribe(
        (balance: number) => {
          this.balance = balance;
          this.isLoading = false;
        },
        (error) => {
          console.error('Failed to load balance:', error);
          this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  }
}
