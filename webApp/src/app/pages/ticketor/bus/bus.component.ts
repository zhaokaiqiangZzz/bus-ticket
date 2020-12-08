import { Component, OnInit } from '@angular/core';
import { Page } from '../../../base/page';
import { CommonService } from '../../../service/common.service';
import { HttpErrorResponse } from '../../../base/Http-error-response';
import { config } from '../../../conf/app.config';
import { UnknownProperty } from '../../../utils';
import { Bus } from '../../../common/bus';
import { BusService } from '../../../service/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.sass']
})
export class BusComponent implements OnInit {

  page: number;

  size: number;

  data: Page<Bus>;

  constructor(private commonService: CommonService,
              private busService: BusService) {
  }

  ngOnInit(): void {
    this.paramsInit();
    this.pageAll();
  }

  delete(bus: Bus): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.busService.delete(bus.id).subscribe(() => {
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
    this.busService.page(this.page, this.size)
      .subscribe((data: Page<Bus>) => {
        this.data = data;
        this.updateCurrentRouteParams();
      }, () => {
        console.log('error');
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
}
