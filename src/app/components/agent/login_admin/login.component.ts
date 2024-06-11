import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../Service/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginAgentComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Attempting to log in with:', this.username, this.password);
    this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('role', response.role);

        if (response.role === 'ROLE_AGENT') {
          this.router.navigate(['/agent-dashboard']);// go to client registration page a sadi9i
        } else if (response.role === 'ROLE_BACKOFFICE') {
          this.router.navigate(['/add-agent']);
        }
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed. Please check your username and password.');
      }
    );
  }
}
