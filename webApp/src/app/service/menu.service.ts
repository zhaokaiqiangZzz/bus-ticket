import {Injectable} from '@angular/core';
import {Menu} from '../common/menu';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Array<Menu>>([
    new Menu({name: '首页', url: '', roles: [Menu.ROLE_PASSENGER, Menu.ROLE_TICKETOR]}),
    new Menu({name: '我的作业', url: 'student/work', roles: [Menu.ROLE_PASSENGER]}),
    new Menu({name: '我的成绩', url: 'student/score', roles: [Menu.ROLE_PASSENGER]}),
    new Menu({name: '学生管理', url: 'teacher/student', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '作业管理', url: 'teacher/work', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '实验项目管理', url: 'teacher/item', roles: [Menu.ROLE_TICKETOR]}),
    new Menu({name: '个人中心', url: 'personalCenter', roles: [Menu.ROLE_TICKETOR, Menu.ROLE_PASSENGER]})
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
