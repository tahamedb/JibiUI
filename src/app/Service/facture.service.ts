import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture.model';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,private datePipe: DatePipe) { }

  getFactures(id: String, ref: string): Observable<Facture[]> {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('ref', ref);

    return this.http.get<Facture[]>(this.apiUrl+'/getimpayes', { params });
  }

  calculatePen(percentage: number, echeance: Date): number {

    const today = new Date();
    echeance = new Date(echeance);

    const timeDiff = today.getTime() - echeance.getTime();

    if (isNaN(echeance.getTime())) {
      throw new Error('Invalid date');
    }

    if( timeDiff <= 0 ){
      return 0;
    }
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    const result = percentage * dayDiff;

    return parseFloat(result.toFixed(2));
  }
  payerFacture(factureId: string, clientId: number): Observable<any> {
    const url = `${this.apiUrl}/api/factures/payer?factureId=${factureId}&clientId=${clientId}`;
    return this.http.post(url, null, { responseType: 'text' });
  }
}
