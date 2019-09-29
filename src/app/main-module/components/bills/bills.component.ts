import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  bills: Bill[];

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
    ) { }

  ngOnInit() {
    this.billsService.getBills().subscribe(bills => {
      this.bills = bills;
    });
  }

  openEditBillForm(bill: Bill) {
    this.billsEventsHandlerService.openEditBillForm(bill);
  }
}
