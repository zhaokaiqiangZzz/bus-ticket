import {Component, OnInit} from '@angular/core';
import {CommonService} from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  loading: boolean;
  showLoading: boolean;
  /* showLoading计时器 */
  showLoadingTimer: any;
  showLogin = true;
  title = 'web';

  constructor(private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.commonService.loading$.subscribe(loading => {
      this.setLoading(loading);
    });

  }

  setLoading(loading: boolean): void {
    if (loading) {
      if (!this.loading) {
        this.loading = true;
        this.showLoadingTimer = setTimeout(() => this.showLoading = true, 500);
      }
    } else {
      this.loading = this.showLoading = false;
      if (this.showLoadingTimer !== null && this.showLoadingTimer !== undefined) {
        clearTimeout(this.showLoadingTimer);
        this.showLoadingTimer = null;
      }
    }
  }
}
