import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';

@Component({
  selector: 'app-new-bill-form',
  templateUrl: './new-bill-form.component.html',
  styleUrls: ['./new-bill-form.component.scss']
})
export class NewBillFormComponent implements OnInit {

  bill: Bill = {
    id: 0,
    companyName: '',
    deadlineDate: null,
    amount: 0,
    isPaid: false,
    isExpired: false
  };
  bills: Bill[];
  isSubmitEnabled = true;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
    ) { }

  ngOnInit() {
    this.billsService.getBills().subscribe(bills => {
      this.bills = bills;
    });
  }

  onNewBillFormSubmit() {
    this.bill.id = this.generateId();
    this.billsService.addBill(this.bill);
    this.closeNewBillForm();
  }

  closeNewBillForm() {
    this.billsEventsHandlerService.closeNewBillForm();
  }

  generateId(): number {
    if (this.bills.length === 0) {
      return 1;
    } else {
      return this.bills.length + 1;
    }
  }
}
