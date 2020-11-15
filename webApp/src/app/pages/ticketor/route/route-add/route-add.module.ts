import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAddRoutingModule } from './route-add-routing.module';
import { RouteAddComponent } from './route-add.component';


@NgModule({
  declarations: [RouteAddComponent],
  imports: [
    CommonModule,
    RouteAddRoutingModule
  ]
})
export class RouteAddModule { }
