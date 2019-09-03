import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillsService } from '../../services/bills.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  bills: Bill[];

  constructor(private billsService: BillsService) { }

  ngOnInit() {
    this.getBills();
    this.checkIfExpired(this.bills);
  }

  checkIfExpired(bills: Bill[]): void {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    bills.forEach(bill => bill.isExpired = yesterday > bill.deadlineDate ? true : false);
  }

  getBills(): void {
    this.billsService.getBills().subscribe(bills => this.bills = bills);
  }
}
