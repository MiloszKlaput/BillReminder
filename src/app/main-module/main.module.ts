import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

import { BoardComponent } from './components/board/board.component';
import { BillsComponent } from './components/bills/bills.component';
import { CalendarBillsComponent } from './components/calendar-bills/calendar-bills.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BoardComponent, BillsComponent, CalendarBillsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  exports: [
    BoardComponent
  ]
})
export class MainModule { }
