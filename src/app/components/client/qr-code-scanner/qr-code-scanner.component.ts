import { Component } from '@angular/core';
import { QrCodeService } from 'src/app/Service/qr-code.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-scanner',
  template: `
    <input type="file" (change)="onFileSelected($event)" accept="image/*"/>
    <button (click)="scanQrCode()" [disabled]="!selectedFile">Scan QR Code</button>
  `
})
export class QrCodeScannerComponent {
  selectedFile: File | null = null;

  constructor(private qrCodeService: QrCodeService, private router : Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  scanQrCode() {
    if (this.selectedFile) {
      this.qrCodeService.scanQrCode(this.selectedFile).subscribe(
        (response) => {
          console.log('Decoded QR code:', response);
          if (response && response.phone) {
            const phone = encodeURIComponent(response.phone);
            this.router.navigate(['/transfert'], { queryParams: { reciever: phone } });;
          } else {
            console.error('Phone number not found in QR code response:', response);
          }
        },
        (error) => {
          console.error('Error scanning QR code:', error);
        }
      );
    }
  }
}
