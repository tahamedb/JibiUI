import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
   phoneNumber!: string;

  setPhoneNumber(phone: string) {
    sessionStorage.setItem(this.phoneNumber, phone);
    this.phoneNumber = phone;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}
