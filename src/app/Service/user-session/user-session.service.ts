import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ClientDTO {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  accountType: string;
  cin: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private readonly PHONE_NUMBER_KEY = 'phoneNumber';
  private readonly USER_DATA_KEY = 'userData';

  constructor(private http: HttpClient) { }

  setPhoneNumber(phone: string): void {
    sessionStorage.setItem(this.PHONE_NUMBER_KEY, phone);
    this.fetchUserData(phone).subscribe();
  }

  getPhoneNumber(): string | null {
    return sessionStorage.getItem(this.PHONE_NUMBER_KEY);
  }

  private fetchUserData(phoneNumber: string): Observable<ClientDTO> {
    return this.http.get<ClientDTO>(`http://localhost:8080/api/clients/getClientByPhoneNumber?phoneNumber=${phoneNumber}`).pipe(
      tap((userData) => {
        this.setUserData(userData);
      })
    );
  }

  private setUserData(userData: ClientDTO): void {
    sessionStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData));
  }

  getUserData(): ClientDTO | null {
    const userDataString = sessionStorage.getItem(this.USER_DATA_KEY);
    return userDataString ? JSON.parse(userDataString) : null;
  }

  clearSession(): void {
    sessionStorage.removeItem(this.PHONE_NUMBER_KEY);
    sessionStorage.removeItem(this.USER_DATA_KEY);
  }
}
