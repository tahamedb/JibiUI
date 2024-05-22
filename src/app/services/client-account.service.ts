import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientAccountService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  createAccount(accountData: any): Observable<any> {
    return this.http.post(this.apiUrl, accountData);
  }
}
