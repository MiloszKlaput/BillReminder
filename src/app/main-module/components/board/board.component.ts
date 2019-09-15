import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  isNewBillForm = false;

  constructor() { }

  ngOnInit() {
  }

  activateNewBillForm() {
    this.isNewBillForm = true;
  }

  closeNewBillForm() {
    this.isNewBillForm = false;
  }
}
