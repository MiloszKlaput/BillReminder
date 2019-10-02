import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillsEventsHandlerService {

  private currentBillSource = new BehaviorSubject<Bill>(
    {
      id: null,
      companyName: '',
      deadlineDate: new Date(),
      amount: null,
      isPaid: false,
      isExpired: false,
    }
  );
  currentBill$ = this.currentBillSource.asObservable();

  private newBillFormSource = new BehaviorSubject<boolean>(false);
  isNewBillFormOpen$ = this.newBillFormSource.asObservable();
  private editBillFormSource = new BehaviorSubject<boolean>(false);
  isEditBillFormOpen$ = this.editBillFormSource.asObservable();

  constructor() { }

  openNewBillForm() {
    this.newBillFormSource.next(true);
    this.editBillFormSource.next(false);
  }

  closeNewBillForm() {
    this.newBillFormSource.next(false);
  }

  openEditBillForm(bill: Bill) {
    this.currentBillSource.next(bill);
    this.editBillFormSource.next(true);
    this.newBillFormSource.next(false);
  }

  closeEditBillForm() {
    this.editBillFormSource.next(false);
  }
}
