import { Injectable } from '@angular/core';
import { Bill } from '../model/bill.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  bills: Bill[];

  constructor() {
    this.bills = [
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(2019, 7, 15),
        isPaid: false,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(),
        isPaid: false,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(),
        isPaid: false,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(),
        isPaid: false,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(),
        isPaid: true,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(),
        isPaid: true,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(),
        isPaid: true,
      },
      {
        companyName: 'Play',
        amount: 25,
        deadlineDate: new Date(),
        isPaid: true,
      },
      {
        companyName: 'Rent',
        amount: 450,
        deadlineDate: new Date(),
        isPaid: true,
      },
      {
        companyName: 'UPC',
        amount: 100,
        deadlineDate: new Date(),
        isPaid: true,
      }
    ];
  }

  getBills(): Observable<Bill[]> {
    return of(this.bills);
  }
}
