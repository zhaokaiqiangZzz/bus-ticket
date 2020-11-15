import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSearchRoutingModule } from './route-search-routing.module';
import { RouteSearchComponent } from './route-search.component';


@NgModule({
  declarations: [RouteSearchComponent],
  imports: [
    CommonModule,
    RouteSearchRoutingModule
  ]
})
export class RouteSearchModule { }
