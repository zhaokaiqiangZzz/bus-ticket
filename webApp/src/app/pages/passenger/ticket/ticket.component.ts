import { Component, OnInit } from '@angular/core';
import { Page } from '../../../base/page';
import { CommonService } from '../../../service/common.service';
import { HttpErrorResponse } from '../../../base/Http-error-response';
import { config } from '../../../conf/app.config';
import { UnknownProperty } from '../../../utils';
import { Ticket } from '../../../common/ticket';
import { TicketService } from '../../../service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {

  page: number;

  size: number;

  data: Page<Ticket>;

  constructor(private commonService: CommonService,
              private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.paramsInit();
    this.pageAll();
  }

  delete(ticket: Ticket): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.ticketService.delete(ticket.id).subscribe(() => {
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
    this.ticketService.page(this.page, this.size)
      .subscribe((data: Page<Ticket>) => {
        this.data = data;
        this.updateCurrentTicketParams();
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
    const params = this.commonService.getCurrentTicketState();
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
  updateCurrentTicketParams(): void {
    const params: UnknownProperty = {};
    params.page = this.page;
    params.size = this.size;
    this.commonService.updateCurrentTicketState(params);
  }
}
