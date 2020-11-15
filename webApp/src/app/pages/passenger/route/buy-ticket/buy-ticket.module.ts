import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyTicketRoutingModule } from './buy-ticket-routing.module';
import { BuyTicketComponent } from './buy-ticket.component';


@NgModule({
  declarations: [BuyTicketComponent],
  imports: [
    CommonModule,
    BuyTicketRoutingModule
  ]
})
export class BuyTicketModule { }
