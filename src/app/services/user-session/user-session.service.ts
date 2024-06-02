import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private phoneNumber!: string;
  setPhoneNumber(phone: string) {
    sessionStorage.setItem("phoneNumber", phone);
    this.phoneNumber = phone;
  }
  getPhoneNumber(): string | null {
    return sessionStorage.getItem("phoneNumber");
  }
}
