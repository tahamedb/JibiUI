import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();



  private authUrl = 'http://localhost:8080/auth/authenticate';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string): Observable<any> {
    console.log('Sending authentication request for', username);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.authUrl, { username, password }, { headers });
  }

  // Method to check if the user has a specific role
  hasRole(requiredRole: string): boolean {
    const token = localStorage.getItem('jwt'); // Assuming the JWT is stored in localStorage
    if (!token) {
      // User is not authenticated, so they don't have the required role
      return false;
    }

    const userRole = localStorage.getItem("role");
    console.log("actual userrole from local storage " + userRole);// Adjust this based on the actual structure of your JWT payload
    console.log(userRole == requiredRole);
    // Check if the user has the required role
    return userRole == requiredRole;
  }
  isLoggedIn(): boolean {
    // Implement logic to check if the user is logged in
    // For example, check if there is a valid JWT token in local storage
    const token = localStorage.getItem('jwt');
    return !!token; // Return true if token exists, otherwise false
  }
}
