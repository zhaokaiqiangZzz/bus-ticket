import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSearchRoutingModule } from './route-search-routing.module';
import { RouteSearchComponent } from './route-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../../../func/select/select.module';
import { YzSubmitButtonModule } from '../../../../func/yz-submit-button/yz-submit-button.module';


@NgModule({
  declarations: [RouteSearchComponent],
  imports: [
    CommonModule,
    RouteSearchRoutingModule,
    ReactiveFormsModule,
    SelectModule,
    YzSubmitButtonModule
  ]
})
export class RouteSearchModule { }
