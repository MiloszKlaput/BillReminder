import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './components/board/board.component';
import { BillsComponent } from './components/bills/bills.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewBillFormComponent } from './components/new-bill-form/new-bill-form.component';
import { AddNewBillComponent } from './components/add-new-bill/add-new-bill.component';

@NgModule({
  declarations: [
    BoardComponent,
    BillsComponent,
    NewBillFormComponent,
    AddNewBillComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    BoardComponent
  ]
})
export class MainModule { }
