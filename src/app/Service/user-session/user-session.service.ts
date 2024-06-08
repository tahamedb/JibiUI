import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
 phoneNumber = '';

  constructor(private http: HttpClient) { }

  setPhoneNumber(phone: string) {
    sessionStorage.setItem(this.phoneNumber, phone);
  }

  getPhoneNumber(): string | null {
    return sessionStorage.getItem(this.phoneNumber);
  }

}
