import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillsEventsHandlerService } from '../../services/bills-events-handler.service';
import { BillsService } from '../../services/bills.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  isNewBillFormOpen: boolean;
  isEditBillFormOpen: boolean;

  newBillFormSubscription: Subscription;
  editBillFormSubscription: Subscription;

  constructor(
    private billsService: BillsService,
    private billsEventsHandlerService: BillsEventsHandlerService
    ) { }

  ngOnInit() {
    this.billsService.getBills();

    this.newBillFormSubscription = this.billsEventsHandlerService.isNewBillFormOpen$.subscribe(state => (this.isNewBillFormOpen = state));
    this.editBillFormSubscription = this.billsEventsHandlerService.isEditBillFormOpen$.subscribe(state => (this.isEditBillFormOpen = state));
  }

  ngOnDestroy() {
    this.newBillFormSubscription.unsubscribe();
    this.editBillFormSubscription.unsubscribe();
  }
}
