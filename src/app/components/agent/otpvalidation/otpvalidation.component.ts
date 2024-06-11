import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DecimalPipe, NgClass} from "@angular/common";
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {OtpService} from "../../../Service/otp.service";


@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    NgClass,
    ReactiveFormsModule
  ],
  styleUrls: ['./otpvalidation.component.css']
})
export class OtpvalidationComponent implements OnInit, OnDestroy {
  otpForm: FormGroup;
 // constructor(private router: Router) {}
  //constructor(private http: HttpClient) {}
  constructor(private fb: FormBuilder, private otpService: OtpService, private router: Router) {
    this.otpForm = this.fb.group({
      username: ['', Validators.required], // Ajoutez un contrôle pour le username
      otp: ['', Validators.required]
    });
  }
  otp: string = '';
  username:string='';
  minutes: number = 5;
  seconds: number = 0;
  timer: any;
  message: string | null = null;
  isSuccess: boolean = false;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.clearTimer();
          this.message = 'OTP expired. Please request a new one.';
          this.isSuccess = false;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  //onConfirmOtp() {
   // if (this.minutes === 0 && this.seconds === 0) {
    //  this.message = 'OTP expired. Please request a new one.';
   //   this.isSuccess = false;
    ////  return;
   // }

    // Simuler la vérification de l'OTP
   // this.verifyOtp(this.otp).then(isValid => {
     // if (isValid) {
       // this.message = 'OTP verified successfully!';
      //  this.isSuccess = true;
      //  this.router.navigate(['/agent-change-password'])
     // } else {
      //  this.message = 'Invalid OTP. Please try again.';
     //   this.isSuccess = false;
   ////   }
    //});

//this.clearTimer();
 // }
  onConfirmOtp() {
    if (this.otpForm.valid) {
      const username = this.otpForm.get('username')?.value;
      const otp = this.otpForm.get('otp')?.value;

      const requestBody = {
        username: username,
        otpNumber: otp
      };

      this.otpService.validateOtp(requestBody.username, requestBody.otpNumber).subscribe(
        (response: any) => {
          console.log("complete response",response);
          this.isSuccess = true;
          this.message = response.message || 'OTP validated successfully';

          this.router.navigate(['/agent-change-password']);
        },
        (error: any) => {
          console.log("error response:",error);
          this.isSuccess = false;
          this.message = error.error || 'Invalid OTP';
        }
      );
    } else {
      console.error('Veuillez remplir tous les champs.');
    }

  }

  verifyOtp(otp: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulez une vérification avec un délai
      setTimeout(() => {
        resolve(otp === '123456'); // Simule une OTP correcte
      }, 1000);
    });
  }
}
