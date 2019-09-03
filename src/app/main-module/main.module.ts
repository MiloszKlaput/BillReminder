import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { BillsComponent } from './components/bills/bills.component';

@NgModule({
  declarations: [BoardComponent, BillsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class MainModule { }
