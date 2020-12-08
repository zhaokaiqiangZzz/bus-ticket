import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyTicketComponent } from '../buy-ticket/buy-ticket.component';
import { RouteComponent } from './route.component';

const routes: Routes = [
  {
    path: '',
    component: RouteComponent,
    data: {
      title: '首页'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
