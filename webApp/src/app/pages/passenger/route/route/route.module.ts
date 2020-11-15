import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';


@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    RouteRoutingModule
  ]
})
export class RouteModule { }
