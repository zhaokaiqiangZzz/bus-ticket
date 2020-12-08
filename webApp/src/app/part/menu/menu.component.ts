import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {Menu} from '../../common/menu';
import {UserService} from '../../service/user.service';
import {isDefined} from '../../utils';
import { AuthService } from '../../service/auth.service';
import { User } from '../../common/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  menus: Array<Menu>;

  private subscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.subscription = this.menuService.getAll()
      .subscribe(data => {
        this.userSubscription = this.authService.getCurrentLoginUser$()
          .subscribe(user => {
            this.menus = [];
            if (isDefined(user)) {
              data.forEach((menu) => {
                if (menu.roles.includes(user.role)) {
                  this.menus.push(menu);
                }
              });
            }
          });
      });
  }

  navigate(menu: Menu): void {
    this.router.navigateByUrl(menu.url);
    // if (menu.url === 'teacher/work') {
    //   WorkService.workPage = 0;
    // }
  }

  getBackgroundColor(menu: Menu): string {
    if (this.active(menu)) {
      return environment.color;
    }
  }

  getTextColor(menu: Menu): string {
    if (this.active(menu)) {
      return 'white';
    }
  }

  /**
   * 判断当前菜单是否激活
   * @param menu 菜单
   */
  active(menu: Menu): boolean {

    // 定义主路由
    let mainRoute: string;

    // 根据是否有第2个/选择截取方式
    // 从urlSegment[1]开始是因为urlSegment[0] === ""
    const urlSegment = this.router.url.split('/');
    if (urlSegment[1] === 'ticketor' || urlSegment[1] === 'passenger') {
      mainRoute = urlSegment[1] + '/' + urlSegment[2];
    } else {
      mainRoute = urlSegment[1];
    }

    // 判断当前路由是否激活
    return mainRoute === menu.url;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
