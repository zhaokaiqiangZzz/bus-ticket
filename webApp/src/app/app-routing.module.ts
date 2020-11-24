import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './part/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          title: '仪表盘'
        }
      },
      {
        path: 'personal',
        loadChildren: () => import('./pages/personal/personal.module').then(m => m.PersonalModule),
        data: {
          title: '个人中心'
        }
      },
      // {
      //   path: 'user',
      //   loadChildren: () => import('./pages/admin/user/user-index/user-index.module').then(m => m.UserIndexModule),
      //   data: {
      //     title: '用户管理'
      //   }
      // },
      // {
      //   path: 'user/add',
      //   loadChildren: () => import('./pages/admin/user/user-add/user-add.module').then(m => m.UserAddModule),
      //   data: {
      //     title: '用户新增'
      //   }
      // },
      // {
      //   path: 'user/edit/:id',
      //   loadChildren: () => import('./pages/admin/user/user-edit/user-edit.module').then(m => m.UserEditModule),
      //   data: {
      //     title: '用户编辑'
      //   }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
