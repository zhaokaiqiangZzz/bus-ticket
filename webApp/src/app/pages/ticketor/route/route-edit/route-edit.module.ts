import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteEditRoutingModule } from './route-edit-routing.module';
import { RouteEditComponent } from './route-edit.component';


@NgModule({
  declarations: [RouteEditComponent],
  imports: [
    CommonModule,
    RouteEditRoutingModule
  ]
})
export class RouteEditModule { }
