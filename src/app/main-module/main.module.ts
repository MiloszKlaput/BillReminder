import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './components/board/board.component';
import { BillsComponent } from './components/bills/bills.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewBillFormComponent } from './components/new-bill-form/new-bill-form.component';

@NgModule({
  declarations: [
    BoardComponent,
    BillsComponent,
    NewBillFormComponent,
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
