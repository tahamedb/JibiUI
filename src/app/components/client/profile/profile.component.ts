import { Component, OnInit } from '@angular/core';
import { ClientAccountService } from 'src/app/services/client-account.service';
import { UserSessionService } from 'src/app/services/user-session/user-session.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  qrCodeUrl: string = '';
  phoneNumber!: string | null
  isLoading = true; // Add a loading indicator

  constructor(
    private clientAccountService: ClientAccountService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit(): void {
    this.phoneNumber = this.userSessionService.getPhoneNumber();
    if (this.phoneNumber) {
      this.clientAccountService.getProfile(this.phoneNumber).subscribe(
        (data: any) => {
          this.profile = data;
          this.qrCodeUrl = this.generateQrCodeUrl(this.profile.phoneNumber);
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching profile data', error);
          this.isLoading = false;
        }
      );
    } else {
      this.isLoading = false;
    }
  }
  generateQrCodeUrl(receiverId: string): string {
    return `${window.location.origin}/payer/${receiverId}`;
  }
}
