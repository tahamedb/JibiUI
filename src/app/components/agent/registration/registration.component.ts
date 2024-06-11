import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AgentService} from "../../../Service/agent.service";
import {Agent} from "../../../models/agent-module";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  agentForm: FormGroup;
  fileToUpload: File | null = null;

  constructor(private fb: FormBuilder, private agentService: AgentService, private router: Router) {
    this.agentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pieceIdentite: ['', Validators.required],
      numeroIdentite: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confemail: ['', [Validators.required, Validators.email]],
      numeroTelephone: ['', Validators.required],
      immatriculation: ['', Validators.required],
      patente: ['', Validators.required],
      description: ['', Validators.required],
      nomfichier: [null] ,// Add the 'nomfichier' form control
      datedecreation:[],
    });
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.fileToUpload = target.files[0];
    }
  }

  onSubmit(): void {
    if (this.agentForm.valid && this.fileToUpload) {
      const agent: Agent = this.agentForm.value;
      const formDataAgent = new FormData();
      Object.keys(agent).forEach(key => {
        formDataAgent.append(key, (agent as any)[key]);
      });

      formDataAgent.append('nomfichier', this.fileToUpload);
      console.log("Printing FormData:");
      formDataAgent.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      this.agentService.addAgent(formDataAgent).subscribe(
        response => {
          console.log('Agent ajouté avec succès:', response);
          const username=response.username;
          this.router.navigate(['/otp-validation']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'agent:', error);
        }
      );
    } else {
      console.error('Veuillez remplir tous les champs et sélectionner un fichier.');
    }
  }
}
