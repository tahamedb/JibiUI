import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface QrCodeResponse {
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {
  private apiUrl = 'http://localhost:8080/api/qr';

  constructor(private http: HttpClient) {}

  scanQrCode(file: File): Observable<QrCodeResponse> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<QrCodeResponse>(`${this.apiUrl}/scan`, formData, { responseType: 'json' });
  }
}
