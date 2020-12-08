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
      {
        path: 'ticketor',
        loadChildren: () => import('./pages/ticketor/ticketor.module').then(m => m.TicketorModule),
        data: {
          title: '售票员模块'
        }
      },
      {
        path: 'passenger',
        loadChildren: () => import('./pages/passenger/passenger.module').then(m => m.PassengerModule),
        data: {
          title: '乘客模块'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
