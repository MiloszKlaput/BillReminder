import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-bill-form',
  templateUrl: './edit-bill-form.component.html',
  styleUrls: ['./edit-bill-form.component.scss']
})
export class EditBillFormComponent implements OnInit, OnDestroy {
  bill: Bill;
  bsConfiguration: Partial<BsDatepickerConfig>;
  currentBillSubscription: Subscription;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
    ) { }

  ngOnInit() {
    this.currentBillSubscription = this.billsEventsHandlerService.currentBill.subscribe(bill => (this.bill = bill));
    this.setBsConfig();
  }

  onEditBillFormSubmit() {
    this.billsService.updateBill(this.bill);
    this.closeEditBillForm();
  }

  onDeleteBill() {
    this.billsService.deleteBill(this.bill);
    this.closeEditBillForm();
  }

  closeEditBillForm() {
    this.billsEventsHandlerService.closeEditBillForm();
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

  ngOnDestroy() {
    this.currentBillSubscription.unsubscribe();
  }
}
