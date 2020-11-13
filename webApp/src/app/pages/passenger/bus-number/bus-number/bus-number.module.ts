import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusNumberRoutingModule } from './bus-number-routing.module';
import { BusNumberComponent } from './bus-number.component';


@NgModule({
  declarations: [BusNumberComponent],
  imports: [
    CommonModule,
    BusNumberRoutingModule
  ]
})
export class BusNumberModule { }
