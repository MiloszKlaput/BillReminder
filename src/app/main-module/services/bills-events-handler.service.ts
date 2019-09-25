import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsEventsHandlerService {

  private newBillFormSource = new BehaviorSubject<boolean>(false);
  isNewBillFormOpen = this.newBillFormSource.asObservable();

  constructor() { }

  openNewBillForm() {
    this.newBillFormSource.next(true);
  }

  closeNewBillForm() {
    this.newBillFormSource.next(false);
  }
}
