import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8080/getotp';

  constructor(private http: HttpClient) { }

  generateOtp(phoneNumber: string): Observable<string> {
    const formattedPhoneNumber = parsePhoneNumberFromString(phoneNumber)?.formatInternational();

    return this.http.get<string>(`${this.baseUrl}/generate?phoneNumber=${phoneNumber}`);
  }

// Replace phoneNumber with the actual phone number

// Parse and format the phone number

// Use the formatted phone number when making requests to Twilio
  // Handle response
}
