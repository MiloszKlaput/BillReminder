import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-new-bill-form',
  templateUrl: './new-bill-form.component.html',
  styleUrls: ['./new-bill-form.component.scss']
})
export class NewBillFormComponent implements OnInit {

  bill: Bill = {
    id: null,
    companyName: '',
    deadlineDate: null,
    amount: null,
    isPaid: false,
    isExpired: false
  };
  bills: Bill[];
  bsConfiguration: Partial<BsDatepickerConfig>;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
  ) { }

  ngOnInit() {
    this.billsService.currentBills$.subscribe(bills => (this.bills = bills));
    this.setBsConfig();
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

  setBsConfig() {
    this.bsConfiguration = Object.assign(
      {
        isAnimated: true,
        adaptivePosition: true,
        dateInputFormat: 'DD-MM-YYYY',
        containerClass: 'theme-dark-blue'
      }
    );
  }
}
