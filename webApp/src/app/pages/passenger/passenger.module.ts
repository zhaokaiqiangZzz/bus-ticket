import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PassengerRoutingModule
  ]
})
export class PassengerModule { }
