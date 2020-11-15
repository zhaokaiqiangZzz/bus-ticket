import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusEditRoutingModule } from './bus-edit-routing.module';
import { BusEditComponent } from './bus-edit.component';


@NgModule({
  declarations: [BusEditComponent],
  imports: [
    CommonModule,
    BusEditRoutingModule
  ]
})
export class BusEditModule { }
