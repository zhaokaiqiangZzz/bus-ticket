import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteIndexRoutingModule } from './route-index-routing.module';
import { RouteIndexComponent } from './route-index.component';


@NgModule({
  declarations: [RouteIndexComponent],
  imports: [
    CommonModule,
    RouteIndexRoutingModule
  ]
})
export class RouteIndexModule { }
