import { Component, OnInit } from '@angular/core';
import {CreancierService} from "../Service/creanciers.service";
import {Observable} from "rxjs";
import {Creancier} from "../models/creancier.model";

@Component({
  selector: 'app-payment',
  templateUrl: './client-homepage.component.html',
  styleUrls: ['./client-homepage.component.css']
})
export class ClientHomepageComponent implements OnInit {
  creditors: Creancier[] = [];
  filteredCreditors: any[];
  selectedCategory: string = 'all';

  constructor(private creditorService: CreancierService) {
    this.filteredCreditors = [];
    this.filteredCreditors=this.creditors;

  } // Inject the service

  ngOnInit(): void {
    this.fetchCreditors();// Fetch the creditors data when the component initializes
    this.filteredCreditors=this.creditors;

  }

  async fetchCreditors(): Promise<void> {
    try {
      const data: Observable<Creancier[]> = await this.creditorService.getAllCreanciers();
      data.subscribe(creditors => {
        this.creditors = creditors;
        this.filteredCreditors = this.creditors; // Assign filteredCreditors after fetching data
      });
    } catch (error) {
      console.error('Failed to load creditors:', error);
    }
  }
  filterCreditors(): void {
    console.log("Selected Category:", this.selectedCategory);
    if (this.selectedCategory === 'all') {
      this.filteredCreditors = this.creditors;
    } else {
      this.filteredCreditors = this.creditors.filter(creditor => {
        const creditorCategory = creditor.categorieCreancier || '';
        console.log("Creditor Category:", creditorCategory);
        return creditorCategory === this.selectedCategory;
      });
    }
    console.log("Filtered Creditors:", this.filteredCreditors);
  }
}
