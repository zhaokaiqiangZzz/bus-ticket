import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusIndexRoutingModule } from './bus-index-routing.module';
import { BusIndexComponent } from './bus-index.component';


@NgModule({
  declarations: [BusIndexComponent],
  imports: [
    CommonModule,
    BusIndexRoutingModule
  ]
})
export class BusIndexModule { }
