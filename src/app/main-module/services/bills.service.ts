import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];
  dates: Date[] = [];

  constructor() {
    this.bills = [
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(2019, 8, 15),
        isPaid: false,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(2019, 8, 31),
        isPaid: false,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(2019, 7, 15),
        isPaid: false,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(2019, 7, 9),
        isPaid: false,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(2019, 9, 15),
        isPaid: true,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(2019, 9, 3),
        isPaid: true,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(2019, 8, 2),
        isPaid: true,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(2019, 8, 1),
        isPaid: true,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(2019, 8, 22),
        isPaid: true,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(2019, 7, 1),
        isPaid: true,
      }
    ];

    this.sortBillsByDate(this.bills);
    this.getDatesFromBills(this.bills);
  }

  getBills(): Observable<Bill[]> {
    return of(this.bills);
  }

  getDates(): Observable<Date[]> {
    return of(this.dates);
  }

  private sortBillsByDate(bills: Bill[]): Bill[] {
    const sortedBills = bills.sort((a, b) => {
      const timeA = a.deadlineDate.getTime();
      const timeB = b.deadlineDate.getTime();

      return timeA - timeB;
    });

    return sortedBills;
  }

  private getDatesFromBills(bills: Bill[]) {
    bills.forEach(bill => {
      this.dates.push(bill.deadlineDate);
    });
  }
}
