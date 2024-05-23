import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from '../Service/facture.service';

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
  transactionType : string;
  fee: number;

  constructor(private router: Router, private factureservice : FactureService) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
    this.creancierName = navigation?.extras?.state?.['creancierName'] || '';
    this.creancierLogo = navigation?.extras?.state?.['creancierLogo'] || '';
    this.creanceName = navigation?.extras?.state?.['creanceName'] || '';
    this.creanceAmount = navigation?.extras?.state?.['creanceAmount'] || 0;
    this.transactionType = navigation?.extras?.state?.['transactionType'];
    this.fee = (this.transactionType == "FACTURE") ? factureservice.calculatePen(0.1,this.formData['date_echeance']) : 0;
  }

  ngOnInit(): void {
  }

  getTransactionDetails(): { label: string, value: any , color? : string}[] {
    switch (this.transactionType.toLowerCase()) {
      case 'facture':
        return [
          { label: 'Reference ID', value: this.formData['ReferenceID'] , color : "" },
          { label: 'Mois d\'echeance', value: this.formData['mois'] , color : "" },
          { label: 'Date echeance', value: this.formData['date_echeance'] , color : "" },
          { label: 'Montant a payer', value: this.formData['montant'] + " DH" , color : "Z" },
          { label: 'Penalite (10% par jour)', value: this.fee + " DH" , color : " font-bold text-red-600" }
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
    // Logic to calculate the total amount based on transaction details
    let totalAmount = 0;

    if(this.transactionType == "FACTURE"){
    // Adjust the calculation based on your specific requirements
    totalAmount = parseFloat(this.formData['montant']) + this.fee;

    return totalAmount.toFixed(2);
    }
    totalAmount = this.creanceAmount;

    return totalAmount;


  }

}
