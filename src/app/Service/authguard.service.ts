import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole = next.data['role'];

    const isLoggedIn = this.authService.isLoggedIn();
    const hasRequiredRole = !requiredRole || this.authService.hasRole(requiredRole);

    console.log("logged in = " + isLoggedIn);
    console.log("required role = " + requiredRole);
    console.log("user has required role = " + hasRequiredRole);

    if (isLoggedIn && hasRequiredRole) {
      return true;
    } else {
      // Redirect the user to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
