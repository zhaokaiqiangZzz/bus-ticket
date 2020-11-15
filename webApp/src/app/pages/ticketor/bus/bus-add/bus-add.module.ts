import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusAddRoutingModule } from './bus-add-routing.module';
import { BusAddComponent } from './bus-add.component';


@NgModule({
  declarations: [BusAddComponent],
  imports: [
    CommonModule,
    BusAddRoutingModule
  ]
})
export class BusAddModule { }
