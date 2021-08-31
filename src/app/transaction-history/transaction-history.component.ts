import { Component, OnInit } from '@angular/core';
import { CapstoneTransactionService } from '../capstone-transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

transactions:any;

  constructor(private transactionService: CapstoneTransactionService) { }

  ngOnInit(): void {
    this.getAllEntries();
  }

  getAllEntries(): void {
    this.transactionService.list()
      .subscribe(
        (entries: any) => {
          this.transactions = entries;
          console.log(entries);
        },
        (error: any) => {
          console.log(error);
        });
  }


}
