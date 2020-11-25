import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ModifyPasswordComponent} from './modify-password/modify-password.component';
import {ModifyPhoneComponent} from './modify-phone/modify-phone.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'modifyPassword',
    component: ModifyPasswordComponent,
    data: {
      title: '修改密码'
    }
  },
  // {
  //   path: 'modifyPhone',
  //   component: ModifyPhoneComponent,
  //   data: {
  //     title: '修改手机号'
  //   }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
