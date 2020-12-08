import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route',
    loadChildren: () => import('./route/route.module').then(m => m.RouteModule),
    data: {
      title: '车次管理'
    }
  },
  {
    path: 'bus',
    loadChildren: () => import('./bus/bus.module').then(m => m.BusModule),
    data: {
      title: '车辆管理'
    }
  },
  {
    path: 'station',
    loadChildren: () => import('./station/station.module').then(m => m.StationModule),
    data: {
      title: '车站管理'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketorRoutingModule { }
