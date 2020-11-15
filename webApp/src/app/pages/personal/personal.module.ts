import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { IndexComponent } from './index/index.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { ModifyPhoneComponent } from './modify-phone/modify-phone.component';
import { AppModule } from '../../app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, ModifyPasswordComponent, ModifyPhoneComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    AppModule,
    ReactiveFormsModule
  ]
})
export class PersonalModule { }
