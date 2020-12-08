import { Component, OnInit } from '@angular/core';
import { Page } from '../../../base/page';
import { Station } from '../../../common/station';
import { CommonService } from '../../../service/common.service';
import { HttpErrorResponse } from '../../../base/Http-error-response';
import { config } from '../../../conf/app.config';
import { UnknownProperty } from '../../../utils';
import { StationService } from '../../../service/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.sass']
})
export class StationComponent implements OnInit {

  page: number;

  size: number;

  data: Page<Station>;

  constructor(private commonService: CommonService,
              private stationService: StationService) {
  }

  ngOnInit(): void {
    this.paramsInit();
    this.pageAll();
  }

  delete(station: Station): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.stationService.delete(station.id).subscribe(() => {
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
    this.stationService.page(this.page, this.size)
      .subscribe((data: Page<Station>) => {
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
