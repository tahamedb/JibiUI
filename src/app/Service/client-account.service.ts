import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientAccountService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint

  private loginUrl = 'http://localhost:8080/api/clients/login'; // Replace with your actual login API endpoint

  constructor(private http: HttpClient) {}

  createAccount(accountData: any): Observable<any> {
    return this.http.post(this.apiUrl, accountData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}
