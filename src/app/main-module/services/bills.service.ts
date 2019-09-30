import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];
  private billsSource: BehaviorSubject<Bill[]> = new BehaviorSubject<Bill[]>([]);
  currentBills$ = this.billsSource.asObservable();
  isFirstDownload = true;

  constructor() { }

  getBills() {
    if (localStorage.getItem('bills') === null) {
      this.bills = [];

    } else if (this.isFirstDownload) {
      this.bills = JSON.parse(localStorage.getItem('bills'));
      this.checkIfExpired();
      this.sortByDate();
      this.billsSource.next(this.bills);
      this.isFirstDownload = false;

    } else {
      this.checkIfExpired();
      this.sortByDate();
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
}
