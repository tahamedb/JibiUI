import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreanceService } from "../../../Service/creance.service";
import { CreanceFormDTO } from "../../../models/creancieForm.model";
import { DatePipe } from '@angular/common';
import { Facture } from '../../../models/facture.model';
import { FactureService } from '../../../Service/facture.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  creanceForm?: CreanceFormDTO;
  dynamicForm: FormGroup;
  formFields: any[];
  crtype: string = "";
  creanceId: string = "";
  factures: Facture[] = [];  // Add a property for the factures
  errorMessage: string | null = null;  // Add a property for the error message

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private creanceService: CreanceService,
    private factureService: FactureService ,
    private datePipe: DatePipe
  ) {
    this.dynamicForm = new FormGroup({});
    this.formFields = [];
  }

  ngOnInit() {
    this.creanceId = this.activatedRoute.snapshot.paramMap.get('id') ?? "";
    this.crtype = this.activatedRoute.snapshot.paramMap.get('type') ?? "";
    this.creanceService.getCreancierById(Number(this.creanceId)).subscribe(creanceForm => {
      this.creanceForm = creanceForm;
      this.formFields = JSON.parse(this.creanceForm.formFieldsJSON);
      this.buildForm();
    });
  }

  buildForm() {
    const formGroup: any = {};
    for (const field of this.formFields) {
      formGroup[field.key] = [field.value || '', Validators.required];
    }
    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    this.factures = [];
    this.errorMessage = null;
    const formData = this.dynamicForm.value;
    if (this.dynamicForm.valid) {

      if(this.crtype == "FACTURE"){
        this.fetchFactures(this.creanceId, formData.ReferenceID);
        console.log(this.factures);
      }else{
      // Include Creancier details
      const navigationExtras = {
        state: {
          data: formData,
          creancierName: this.creanceForm?.creancierName,
          creancierLogo: this.creanceForm?.creancierLogo,
          creanceName: this.creanceForm?.name,
          creanceAmount: this.dynamicForm.value.amount || 0 ,// Assuming the form includes an amount field
          transactionType:this.creanceForm?.creancetype
        }
      };
      // Pass the form data to the facture form component
      this.router.navigate(['/facture'], navigationExtras);
    }
  }
  }
  fetchFactures(id: String, ref: string): void {
    this.factureService.getFactures(id, ref).subscribe({
      next: (data) => this.factures = data,
      error: (err) => this.errorMessage = "Erreur ou pas de facture impayes /// to handle cases "
    });
  }

  onPress(facture: Facture) {

    const form = this.formBuilder.group({
      ReferenceID: facture.factref,
      mois: this.datePipe.transform(facture.month,'MMMM'),
      date_echeance: this.datePipe.transform(facture.echeance, 'short'),
      montant : facture.montant
    });
    const navigationExtras = {
      state: {
        factureid: facture.id,
        data: form.value,
        creancierName: this.creanceForm?.creancierName,
        creancierLogo: this.creanceForm?.creancierLogo,
        creanceName: this.creanceForm?.name,
        creanceAmount: this.dynamicForm.value.amount || 0 ,// Assuming the form includes an amount field
        transactionType:this.creanceForm?.creancetype
      }
    };
    this.router.navigate(['/facture'], navigationExtras);
  }
}
