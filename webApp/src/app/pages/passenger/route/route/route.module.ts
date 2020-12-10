import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { PageModule } from '../../../../func/page/page.module';


@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    RouteRoutingModule,
    PageModule
  ]
})
export class RouteModule { }
