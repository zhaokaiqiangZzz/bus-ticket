import {Injectable} from '@angular/core';
import {Menu} from '../common/menu';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Array<Menu>>([
    new Menu({name: '首页', url: 'dashboard', roles: [Menu.ROLE_PASSENGER, Menu.ROLE_TICKETOR]}),
    new Menu({name: '车次查询', url: 'passenger/route-search', roles: [Menu.ROLE_PASSENGER]}),
    new Menu({name: '我的车票', url: 'passenger/ticket', roles: [Menu.ROLE_PASSENGER]}),
    // new Menu({name: '', url: 'student/score', roles: [Menu.ROLE_PASSENGER]}),
    new Menu({name: '车次管理', url: 'ticketor/route', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '车辆管理', url: 'ticketor/bus', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '车站管理', url: 'ticketor/station', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '个人中心', url: 'personal', roles: [Menu.ROLE_TICKETOR, Menu.ROLE_PASSENGER]})
  ]);

  constructor() {
  }

  getAll(): Observable<Array<Menu>> {
    return this.menusSubject.asObservable();
  }

  addMenu(menu: Menu): void {
    const menus = this.menusSubject.value;
    menus.push(menu);
    this.menusSubject.next(menus);
  }
}
