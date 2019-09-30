import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';

enum BillsStatus {
  noBills = 0,
  billsPaid = 1,
  billsUnpaidDeadlineNotCrossed = 2,
  billsUnpaidDeadlineCrossed = 3
}

@Component({
  selector: 'app-header-bills-status',
  templateUrl: './header-bills-status.component.html',
  styleUrls: ['./header-bills-status.component.scss']
})
export class HeaderBillsStatusComponent implements OnInit {
  bills: Bill[];
  message: string;
  billsStatus: BillsStatus;

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.billsService.currentBills$.subscribe(bills => {
      this.bills = bills;
    });
    this.setBillsStatus();
    this.setHeaderMessage();
  }

  setBillsStatus() {
    if (this.bills.length === 0) {
      this.billsStatus = 0;
    }

    for (const bill of this.bills) {
      if (bill.isExpired && !bill.isPaid) {
        this.billsStatus = 3;
        return;
      } else if (!bill.isExpired && !bill.isPaid) {
        this.billsStatus = 2;
      } else {
        this.billsStatus = 1;
      }
    }
  }

  setHeaderMessage() {
    if (this.billsStatus === 0) {
      this.message = `You don't have any bills. Add one by clicking 'Add new bill' button.`;
    } else if (this.billsStatus === 1) {
      this.message = 'Great, You have paid all your bills on time!';
    } else if (this.billsStatus === 2 || this.billsStatus === 3) {
      this.message = 'You have unpaid bills!';
    }
  }
}
