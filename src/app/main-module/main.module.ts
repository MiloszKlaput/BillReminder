import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './components/board/board.component';
import { BillsComponent } from './components/bills/bills.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewBillFormComponent } from './components/new-bill-form/new-bill-form.component';
import { AddNewBillComponent } from './components/add-new-bill/add-new-bill.component';
import { EditBillFormComponent } from './components/edit-bill-form/edit-bill-form.component';
import { HeaderBillsStatusComponent } from './components/header-bills-status/header-bills-status.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    BoardComponent,
    BillsComponent,
    NewBillFormComponent,
    AddNewBillComponent,
    EditBillFormComponent,
    HeaderBillsStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    BsDatepickerModule
  ],
  exports: [
    BoardComponent
  ]
})
export class MainModule { }
