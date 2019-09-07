import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../services/bills.service';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-calendar-bills',
  templateUrl: './calendar-bills.component.html',
  styleUrls: ['./calendar-bills.component.scss']
})
export class CalendarBillsComponent implements OnInit {
  minDateValue: Date;
  maxDateValue: Date;

  dates: Date[];
  bills: Bill[];

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.getBills();
    this.getDates();
    this.getMinAndMaxDate();
  }

  getBills() {
    this.billsService.getBills().subscribe(bills => this.bills = bills);
  }

  getDates() {
    this.billsService.getDates().subscribe(dates => this.dates = dates);
  }

  getMinAndMaxDate() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.minDateValue = new Date();
    this.minDateValue.setDate(0);
    this.minDateValue.setMonth(month);
    this.minDateValue.setFullYear(year);

    this.maxDateValue = new Date();
    this.maxDateValue.setDate(30);
    this.maxDateValue.setMonth(month);
    this.maxDateValue.setFullYear(year);
  }
}


