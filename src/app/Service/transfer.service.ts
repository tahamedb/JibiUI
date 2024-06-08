// transfer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private apiUrl = 'http://localhost:8080/transfert';

  constructor(private http: HttpClient) { }

  transfer(montant: number, senderId: string, recieverId: string): Observable<any> {
    const url = `${this.apiUrl}?montant=${montant}&senderId=${senderId}&recieverId=${recieverId}`;
    return this.http.post(url, null, { responseType: 'text' });
  }
}
