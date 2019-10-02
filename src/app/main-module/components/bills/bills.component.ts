import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit, OnDestroy {
  bills: Bill[];
  currentBillSubscription: Subscription;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
    ) { }

  ngOnInit() {
     this.currentBillSubscription = this.billsService.currentBills$.subscribe(bills => (this.bills = bills));
  }

  openEditBillForm(bill: Bill) {
    this.billsEventsHandlerService.openEditBillForm(bill);
  }

  ngOnDestroy() {
    this.currentBillSubscription.unsubscribe();
  }
}
