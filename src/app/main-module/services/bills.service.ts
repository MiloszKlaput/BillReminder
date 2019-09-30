import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { BehaviorSubject } from 'rxjs';

export enum BillsStatus {
  noBills = 0,
  billsPaid = 1,
  billsUnpaidDeadlineNotCrossed = 2,
  billsUnpaidDeadlineCrossed = 3
}

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];
  private billsSource: BehaviorSubject<Bill[]> = new BehaviorSubject<Bill[]>([]);
  currentBills$ = this.billsSource.asObservable();
  private billsStatusSource: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  billsStatus$ = this.billsStatusSource.asObservable();
  isFirstDownload = true;

  constructor() { }

  getBills() {
    if (localStorage.getItem('bills') === null) {
      this.bills = [];

    } else if (this.isFirstDownload) {
      this.bills = JSON.parse(localStorage.getItem('bills'));
      this.checkIfExpired();
      this.sortByDate();
      this.setBillsStatus();
      this.billsSource.next(this.bills);
      this.isFirstDownload = false;

    } else {
      this.checkIfExpired();
      this.sortByDate();
      this.setBillsStatus();
      this.billsSource.next(this.bills);
    }
  }

  addBill(bill: Bill) {
    this.bills.push(bill);
    localStorage.setItem('bills', JSON.stringify(this.bills));
    this.getBills();
  }

  updateBill(bill: Bill) {
    this.bills.forEach((current, index) => {
      if (bill.id === current.id) {
        this.bills.splice(index, 1);
      }
    });

    this.bills.unshift(bill);
    localStorage.setItem('bills', JSON.stringify(this.bills));
    this.getBills();
  }

  deleteBill(bill: Bill) {
    this.bills.forEach((current, index) => {
      if (bill.id === current.id) {
        this.bills.splice(index, 1);
      }
    });

    localStorage.setItem('bills', JSON.stringify(this.bills));
    this.getBills();
  }

  private checkIfExpired(): void {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    this.bills.forEach(bill => bill.isExpired = new Date(bill.deadlineDate).getTime() < yesterday.getTime() ? true : false);

    localStorage.setItem('bills', JSON.stringify(this.bills));
  }

  private sortByDate(): void {
    this.bills.sort((a, b) => (new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime()));
  }

  private setBillsStatus() {
    console.log('test');
    if (this.bills.length === 0) {
      this.billsStatusSource.next(BillsStatus.noBills);
    } else {
      for (const bill of this.bills) {
        if (bill.isExpired && !bill.isPaid) {
          this.billsStatusSource.next(BillsStatus.billsUnpaidDeadlineCrossed);
          return;
        } else if (!bill.isExpired && !bill.isPaid) {
          this.billsStatusSource.next(BillsStatus.billsUnpaidDeadlineNotCrossed);
        } else {
          this.billsStatusSource.next(BillsStatus.billsPaid);
        }
      }
    }
  }
}
