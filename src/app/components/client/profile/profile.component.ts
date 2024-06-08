import { Component, OnInit } from '@angular/core';
import { ClientAccountService } from 'src/app/Service/client-account.service';
import { UserSessionService } from 'src/app/Service/user-session/user-session.service';
import {Observable} from "rxjs"; // Adjust the import path as necessary

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  qrCodeUrl: string = '';
  phoneNumber!: string | null
  isLoading = true;

  constructor(
    private clientAccountService: ClientAccountService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit(): void {
    this.phoneNumber = this.userSessionService.getPhoneNumber();
    if (this.phoneNumber) {
      const data=this.userSessionService.getUserData()
          this.profile = data;
          this.qrCodeUrl = this.generateQrCodeUrl(this.profile.phone);

    } else {
      this.isLoading = false;
    }
  }

  generateQrCodeUrl(receiverId: string): string {
    return `{"phone":"${{receiverId}}"}`;
  }
}
