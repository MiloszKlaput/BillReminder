import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];

  constructor() { }

  getBills(): Observable<Bill[]> {
    if (localStorage.getItem('bills') === null) {
      this.bills = [];
    } else {
      this.bills = JSON.parse(localStorage.getItem('bills'));
    }

    return of(this.bills.sort((a, b) => {
      return new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime();
    }));
  }

  addBill(bill: Bill) {
    this.bills.unshift(bill);
    localStorage.setItem('bills', JSON.stringify(this.bills));
  }

  // updateBill(bill: Bill) {
  //   this.bills.forEach((current, index) => {
  //     if (bill.id === current.id) {
  //       this.bills.splice(index, 1);
  //     }
  //   });
  //   this.bills.unshift(bill);

  //   localStorage.setItem('bills', JSON.stringify(this.bills));
  // }

  // deleteBill(bill: Bill) {
  //   this.bills.forEach((current, index) => {
  //     if (bill.id === current.id) {
  //       this.bills.splice(index, 1);
  //     }
  //   });

  //   localStorage.setItem('bills', JSON.stringify(this.bills));
  // }
}
