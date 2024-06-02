import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientAccountService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint
  private loginUrl = 'https://run.mocky.io/v3/ad35a757-6210-4a09-a749-6a50a6d57cc3'; // Replace with your actual login API endpoint
  private profileUrl = 'https://run.mocky.io/v3/cc2b9d02-7785-42b4-8d4c-b82dee84591b'; // Replace with your actual profile API endpoint

  constructor(private http: HttpClient) {}

  createAccount(accountData: any): Observable<any> {
    return this.http.post(this.apiUrl, accountData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  getProfile(phoneNumber: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { phoneNumber };
    return this.http.post<any>(this.profileUrl, body, { headers });
  }
}
