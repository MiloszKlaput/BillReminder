import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];
  private billsSubject$: BehaviorSubject<Bill[]> = new BehaviorSubject<Bill[]>([]);

  constructor() { }

  getBills(): Observable<Bill[]> {
    if (localStorage.getItem('bills') === null) {
      this.bills = [];
    } else {
      this.bills = JSON.parse(localStorage.getItem('bills'));
      this.checkIfExpired();
      this.sortByDate();
    }

    this.billsSubject$.next(this.bills);

    return this.billsSubject$.asObservable();
  }

  addBill(bill: Bill) {
    this.bills.push(bill);
    this.checkIfExpired();
    this.sortByDate();

    this.billsSubject$.next(this.bills);
    localStorage.setItem('bills', JSON.stringify(this.bills));
  }

  updateBill(bill: Bill) {
    this.bills.forEach((current, index) => {
      if (bill.id === current.id) {
        this.bills.splice(index, 1);
      }
    });
    this.bills.unshift(bill);
    this.checkIfExpired();
    this.sortByDate();

    localStorage.setItem('bills', JSON.stringify(this.bills));
  }

  deleteBill(bill: Bill) {
    this.bills.forEach((current, index) => {
      if (bill.id === current.id) {
        this.bills.splice(index, 1);
      }
    });

    localStorage.setItem('bills', JSON.stringify(this.bills));
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
