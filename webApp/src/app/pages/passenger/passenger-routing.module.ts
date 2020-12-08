import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-search',
    loadChildren: () => import('./route/route-search/route-search.module').then(m => m.RouteSearchModule),
    data: {
      title: '车次查找'
    }
  },
  {
    path: 'route',
    loadChildren: () => import('./route/route/route.module').then(m => m.RouteModule),
    data: {
      title: '车次列表'
    }
  },
  {
    path: 'buy-ticket',
    loadChildren: () => import('./route/buy-ticket/buy-ticket.module').then(m => m.BuyTicketModule),
    data: {
      title: '购买界面'
    }
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule),
    data: {
      title: '我的车票'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }
