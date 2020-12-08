import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '../../../func/select/select.module';
import { YzSubmitButtonModule } from '../../../func/yz-submit-button/yz-submit-button.module';


@NgModule({
  declarations: [RouteComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    RouteRoutingModule,
    ReactiveFormsModule,
    SelectModule,
    YzSubmitButtonModule
  ],
  providers: [DatePipe]
})
export class RouteModule { }
