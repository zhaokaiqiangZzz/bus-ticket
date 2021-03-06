import { Component, OnDestroy, OnInit } from '@angular/core';
// import { TitleService } from '../../service/title.service';
import { Subscription } from 'rxjs';
import { CommonService } from '../../service/common.service';
import {isNotNull} from '../../utils';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  title: string;
  show: boolean;

  private titleSubscription: Subscription;
  private backSubscription: Subscription;

  constructor(private commonService: CommonService,
              // private titleService: TitleService
  ) {
  }

  ngOnInit(): void {
    /** 订阅标题 */
    // this.titleSubscription = this.titleService.title()
    //   .subscribe((title: string) => this.title = title);
    /** 订阅是否允许返回 */
    this.backSubscription = this.commonService.canBack()
      .subscribe((canBack: boolean) => this.show = canBack);
  }

  back(): void {
    this.commonService.back();
  }

  ngOnDestroy(): void {
    if (isNotNullOrUndefined(this.titleSubscription)) {
      /** 统一取消订阅 */
      this.titleSubscription.unsubscribe();
    }

    if (isNotNullOrUndefined(this.backSubscription)) {
      this.backSubscription.unsubscribe();
    }
  }

}
