import { Component, OnInit } from '@angular/core';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';

@Component({
  selector: 'app-add-new-bill',
  templateUrl: './add-new-bill.component.html',
  styleUrls: ['./add-new-bill.component.scss']
})
export class AddNewBillComponent implements OnInit {

  constructor(private billsEventsHandlerService: BillsEventsHandlerService) { }

  ngOnInit() {
  }

  openNewBillForm() {
    this.billsEventsHandlerService.openNewBillForm();
  }
}
