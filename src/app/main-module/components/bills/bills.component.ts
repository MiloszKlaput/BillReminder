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
    this.billsService.getBills().subscribe(bills => {
      this.bills = bills;
    });
  }
}
