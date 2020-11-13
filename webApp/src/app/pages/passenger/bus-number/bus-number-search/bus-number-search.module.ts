import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusNumberSearchRoutingModule } from './bus-number-search-routing.module';
import { BusNumberSearchComponent } from './bus-number-search.component';


@NgModule({
  declarations: [BusNumberSearchComponent],
  imports: [
    CommonModule,
    BusNumberSearchRoutingModule
  ]
})
export class BusNumberSearchModule { }
