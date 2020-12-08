import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteSearchComponent } from './route-search.component';

const routes: Routes = [
  {
    path: '',
    component: RouteSearchComponent,
    data: {
      title: '首页'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteSearchRoutingModule { }
