import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-bill-form',
  templateUrl: './edit-bill-form.component.html',
  styleUrls: ['./edit-bill-form.component.scss']
})
export class EditBillFormComponent implements OnInit, OnDestroy {
  bill: Bill;
  bsConfiguration: Partial<BsDatepickerConfig>;
  currentBillSubscription: Subscription;
  modalRef: BsModalRef;

  @ViewChild('deleteConfirmModal', { static: false }) deleteConfirmModal: TemplateRef<any>;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.currentBillSubscription = this.billsEventsHandlerService.currentBill$.subscribe(bill => (this.bill = bill));
    this.setBsConfig();
  }

  onEditBillFormSubmit() {
    this.billsService.updateBill(this.bill);
    this.closeEditBillForm();
  }

  onDeleteBill() {
    this.modalRef = this.modalService.show(this.deleteConfirmModal);
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

  deleteBill() {
    this.billsService.deleteBill(this.bill);
    this.closeEditBillForm();
    this.closeModal();
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnDestroy() {
    this.currentBillSubscription.unsubscribe();
  }
}
