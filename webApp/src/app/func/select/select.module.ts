import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { CitySelectComponent } from './city-select/city-select.component';
import { FormsModule } from '@angular/forms';
import { StationSelectComponent } from './station-select/station-select.component';
import { BusSelectComponent } from './bus-select/bus-select.component';


@NgModule({
  declarations: [CitySelectComponent, StationSelectComponent, BusSelectComponent],
  exports: [
    CitySelectComponent,
    StationSelectComponent,
    BusSelectComponent
  ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    FormsModule
  ]
})
export class SelectModule { }
