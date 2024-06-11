import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8080/getotp';
  private apiUrl = 'http://localhost:8080/backoffice';


  constructor(private http: HttpClient) { }

  generateOtp(phoneNumber: string): Observable<string> {
    // const formattedPhoneNumber = parsePhoneNumberFromString(phoneNumber)?.formatInternational();

    return this.http.get<string>(`${this.baseUrl}/generate?phoneNumber=${phoneNumber}`);
  }validateOtp(username: string, otp: string): Observable<any> {
    const requestBody = {
      username: username,
      otpNumber: otp
    };
    console.log("sending otp validation request",requestBody);
    return this.http.post(`${this.apiUrl}/validate-otp`, requestBody);
  }
  sendOtp(email: string): Observable<any> {
    const params = new URLSearchParams();
    params.set('email', email);
    return this.http.post(`${this.apiUrl}/send-otp`, params.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    });
  }
  //handle change password logic
  changePassword(email: string, newPassword: string): Observable<any> {
    const requestBody = { email: email, newPassword: newPassword };
    console.log('Request body:', requestBody);
    return this.http.post(`${this.apiUrl}/change-password`, requestBody, {
      responseType: "arraybuffer",
      headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }


// Replace phoneNumber with the actual phone number

// Parse and format the phone number

// Use the formatted phone number when making requests to Twilio
  // Handle response
}
