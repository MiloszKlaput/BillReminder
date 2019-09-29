import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';

@Component({
  selector: 'app-header-bills-status',
  templateUrl: './header-bills-status.component.html',
  styleUrls: ['./header-bills-status.component.scss']
})
export class HeaderBillsStatusComponent implements OnInit {
  bills: Bill[];
  message: string;
  billsPaid: boolean;

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.billsService.getBills().subscribe(bills => {
      this.bills = bills;
    });
    this.billsPaid = this.setPaidStatus();
    this.setHeaderMessage();
  }

  setPaidStatus(): boolean {
    let counter = 0;

    this.bills.forEach(bill => {
      if (bill.isExpired && !bill.isPaid) {
        counter++;
      }
    });

    return counter > 0 ? false : true;
  }

  setHeaderMessage() {
    if (this.bills.length === 0) {
      this.message = `You don't have any bills. Add one by clicking 'Add new bill' button.`;
    } else if (this.bills.length !== 0 && this.billsPaid) {
      this.message = 'Great, You have paid all your bills on time!';
    } else if (this.bills.length !== 0 && !this.billsPaid) {
      this.message = 'You have unpaid bills!';
    }
  }
}
