import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { StationComponent } from './station.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YzSubmitButtonModule } from '../../../func/yz-submit-button/yz-submit-button.module';
import { SelectModule } from '../../../func/select/select.module';
import { PageModule } from '../../../func/page/page.module';


@NgModule({
  declarations: [StationComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    StationRoutingModule,
    ReactiveFormsModule,
    YzSubmitButtonModule,
    SelectModule,
    PageModule
  ]
})
export class StationModule { }
