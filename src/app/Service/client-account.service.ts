import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {CreanceFormDTO} from "../models/creancieForm.model";

@Injectable({
  providedIn: 'root',
})
export class ClientAccountService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint
  private apiUrl = 'http://localhost:8080/api/clients'; // Replace with your actual API endpoint

  private loginUrl = 'http://localhost:8080/api/clients/login'; // Replace with your actual login API endpoint
  private profileUrl = 'https://run.mocky.io/v3/cc2b9d02-7785-42b4-8d4c-b82dee84591b'; // Replace with your actual profile API endpoint

  constructor(private http: HttpClient) {}
  getProfile(phoneNumber: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { phoneNumber };
    return this.http.post<any>(this.profileUrl, body, { headers });
  }
  createAccount(accountData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/register`, accountData, { headers });
  }

  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/login`, credentials, { headers });
  }

  changePassword(phone: string | null, currentPassword: string, newPassword: string, confirmNewPassword: string): Observable<any> {
    const body = { phone, currentPassword, newPassword,confirmNewPassword };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/change-password`, body, { headers });

  }
  getBalance(phone: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(`${this.apiUrl}/getbalance?phoneNumber=${phone}`);
  }

}
