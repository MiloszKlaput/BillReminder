import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  bills: Bill[];

  constructor() { }

  ngOnInit() {
    this.bills = [
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
        isPaid: false,
      },
    ];
  }

}
