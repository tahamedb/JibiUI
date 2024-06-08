import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../Service/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import {UserSessionService} from "../../../Service/user-session/user-session.service";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions: Transaction[] = [];
  paginatedTransactions: Transaction[] = [];
  pageSize: number = 3;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private transactionService: TransactionService,private userAccountService : UserSessionService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    const clientId = this.userAccountService.getUserData()?.id;
    this.transactionService.getTransactionsByClientId(clientId).subscribe(transactions => {
      this.transactions = transactions;
      this.totalPages = Math.ceil(this.transactions.length / this.pageSize);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.paginatedTransactions = this.getPaginatedTransactions();
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.paginatedTransactions = this.getPaginatedTransactions();
  }

  getPaginatedTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.transactions.slice(startIndex, startIndex + this.pageSize);
  }
}
