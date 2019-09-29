import { Component, OnInit } from '@angular/core';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  isNewBillFormOpen: boolean;
  isEditBillFormOpen: boolean;

  constructor(private billsEventsHandlerService: BillsEventsHandlerService) { }

  ngOnInit() {
    this.billsEventsHandlerService.isNewBillFormOpen.subscribe(state => {
      this.isNewBillFormOpen = state;
    });

    this.billsEventsHandlerService.isEditBillFormOpen.subscribe(state => {
      this.isEditBillFormOpen = state;
    });
  }
}
