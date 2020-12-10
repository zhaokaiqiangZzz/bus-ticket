import { Component, OnInit } from '@angular/core';
import { Page } from '../../../../base/page';
import { Route } from '../../../../common/route';
import { CommonService } from '../../../../service/common.service';
import { RouteService } from '../../../../service/route.service';
import { HttpErrorResponse } from '../../../../base/Http-error-response';
import { config } from '../../../../conf/app.config';
import { Assert, UnknownProperty } from '../../../../utils';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../../service/ticket.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.sass']
})
export class RouteComponent implements OnInit {

  page: number;

  size: number;

  data: Page<Route>;

  constructor(private commonService: CommonService,
              private routeService: RouteService,
              private route: ActivatedRoute,
              private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.paramsInit();
    this.pageAll();
  }

  delete(route: Route): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.routeService.delete(route.id).subscribe(() => {
          this.pageAll();

          // 操作成功提示
          this.commonService.success(() => {
          });
        }, (response: HttpErrorResponse) => {
          // 操作失败提示
          this.commonService.httpError(response);
        });
      }

    });
  }

  /**
   * 获取所有分页数据
   */
  pageAll(): void {
    this.route.params.subscribe((params: { startCityId: number, endCityId: number, startTime: number  }) => {
      this.routeService.search(params.startCityId, params.endCityId, params.startTime, this.page, this.size)
        .subscribe((data: Page<Route>) => {
          this.data = data;
          this.updateCurrentRouteParams();
        }, () => {
          console.log('error');
        });
    });
  }

  /**
   * 重新加载数据 根据 size
   */
  reloadBySize(size: number): void {
    this.size = size;
    this.pageAll();
  }

  /**
   * 重新加载数据 根据 page
   */
  reloadByPage(page: number): void {
    this.page = page;
    this.pageAll();
  }

  /**
   * 参数初始化
   */
  paramsInit(): void {
    this.page = 0;
    this.size = config.size;

    // 获取历史参数
    const params = this.commonService.getCurrentRouteState();
    if (params.page) {
      this.page = Number(params.page);
    }

    if (params.size) {
      this.size = Number(params.size);
    }
  }

  /**
   * 保存历史参数
   */
  updateCurrentRouteParams(): void {
    const params: UnknownProperty = {};
    params.page = this.page;
    params.size = this.size;
    this.commonService.updateCurrentRouteState(params);
  }

  buy(route: Route): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.ticketService.buy(route.id).subscribe(() => {
          this.pageAll();

          // 操作成功提示
          this.commonService.success(() => {
          });
        }, (response: HttpErrorResponse) => {
          // 操作失败提示
          this.commonService.httpError(response);
        });
      }

    });
  }
}
