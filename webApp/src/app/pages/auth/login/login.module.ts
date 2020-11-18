import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YzSubmitButtonModule } from '../../../func/yz-submit-button/yz-submit-button.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {YunzhiInterceptor} from '../../../net/yunzhi.interceptor';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    YzSubmitButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YunzhiInterceptor,
      multi: true
    }
  ],
})
export class LoginModule { }
