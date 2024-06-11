import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole = next.data['role'];
    console.log("logged in = " + this.authService.isLoggedIn());
    console.log("required role = " + this.authService.hasRole(requiredRole));
    if (this.authService.isLoggedIn() && this.authService.hasRole(requiredRole)) {
      return true;
    } else {
      // Redirect the user to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
