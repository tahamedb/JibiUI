import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from '../../../Service/facture.service';
import { OtpService } from '../../../Service/otp.service';
import {UserSessionService} from "../../../Service/user-session/user-session.service";

@Component({
  selector: 'app-facture-payment',
  templateUrl: './facture-form.component.html',
  styleUrls: ['./facture-form.component.css']
})
export class FactureFormComponent implements OnInit {
  formData: any;
  creancierName: string;
  creancierLogo: string;
  creanceName: string;
  creanceAmount: number;
  transactionType: string;
  fee: number;
  phoneNumber: string='212682747624';
  otpCode: string='';
  generatedOtp: string='';
  message: string='';
  factureid: string='';
  clientid: number | undefined=this.userSessionService.getUserData()?.id;

  constructor(private userSessionService : UserSessionService   ,private router: Router, private factureService: FactureService, private otpService: OtpService) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = navigation?.extras?.state?.['creanceName'] || '';
    this.creanceAmount = navigation?.extras?.state?.['creanceAmount'] || 0;
    this.transactionType = navigation?.extras?.state?.['transactionType'];
    this.factureid = navigation?.extras?.state?.['factureid'] || '';
    this.fee = (this.transactionType == "FACTURE") ? factureService.calculatePen(0.1, this.formData['date_echeance']) : 0;
  }

  ngOnInit(): void {
  }

  getTransactionDetails(): { label: string, value: any, color?: string }[] {
    switch (this.transactionType.toLowerCase()) {
      case 'facture':
        return [
          { label: 'Reference ID', value: this.formData['ReferenceID'], color: "" },
          { label: 'Mois d\'echeance', value: this.formData['mois'], color: "" },
          { label: 'Date echeance', value: this.formData['date_echeance'], color: "" },
          { label: 'Montant a payer', value: this.formData['montant'] + " DH", color: "Z" },
          { label: 'Penalite (10% par jour)', value: this.fee + " DH", color: "font-bold text-red-600" }
        ];
      case 'donnation':
        return [
          { label: 'Nom et prénom du donnateur', value: this.formData['donorName'] },
          { label: 'Montant du don', value: this.creanceAmount + " DH" }
        ];
      case 'recharge':
        return [
          { label: 'Numero de telephone', value: this.formData['phoneNumber'] },
          { label: 'Type de recharge', value: this.formData['rechargeType'] },
          { label: 'Montant de recharge', value: this.creanceAmount + " DH" }
        ];
      default:
        return [];
    }
  }

  calculateTotalAmount(): any {
    let totalAmount = 0;
    if (this.transactionType == "FACTURE") {
      totalAmount = parseFloat(this.formData['montant']) + this.fee;
      return totalAmount.toFixed(2);
    }
    totalAmount = this.creanceAmount;
    return totalAmount;
  }

  generateOtp() {
    this.otpService.generateOtp(this.phoneNumber).subscribe(response => {
      // Store the generated OTP message
      this.generatedOtp = response;
      console.log("response is "+this.generatedOtp);
      // Clear any previous message
      this.message = '';
    });
  }

  validateOtp() {
    console.log('Validating OTP' + "generatedOtp" + this.generatedOtp + ' with ' + this.otpCode);
    // Check if user input matches the generated OTP
    if (this.otpCode == this.generatedOtp) {
      // Proceed with payment processing if OTP is valid
      this.payFacture();
    } else {
      // Display an error message if OTP is invalid
      this.message = 'Invalid OTP. Please try again.';
    }
  }


  payFacture() {

    this.factureService.payerFacture(this.factureid, this.clientid).subscribe(response => {
      this.message = response;
    });
  }

  onValiderClick() {
    this.generateOtp();
  }
}
