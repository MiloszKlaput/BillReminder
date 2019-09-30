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
  billsStatus: number;
  message: string[] =
  [
    `You don't have any bills. Add one by clicking 'Add new bill' button.`,
    'Great, You have paid all your bills on time!',
    'You have unpaid bills!'
  ];

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.billsService.currentBills$.subscribe(bills => (this.bills = bills));
    this.billsService.billsStatus$.subscribe(billStatus => (this.billsStatus = billStatus));
  }
}
