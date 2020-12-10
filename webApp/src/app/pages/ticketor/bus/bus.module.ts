import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YzSubmitButtonModule } from '../../../func/yz-submit-button/yz-submit-button.module';
import { PageModule } from '../../../func/page/page.module';


@NgModule({
  declarations: [BusComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    BusRoutingModule,
    YzSubmitButtonModule,
    ReactiveFormsModule,
    PageModule
  ]
})
export class BusModule { }
