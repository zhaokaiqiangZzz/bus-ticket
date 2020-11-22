import { Component, OnDestroy, OnInit } from '@angular/core';
// import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
// import { User } from '../../common/user';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // 当前用户
  // currentUser: User;

  environment = environment;

  private subscription: Subscription;

  constructor(private router: Router,
              private authService: AuthService
              ) {
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // this.subscription = this.authService.getCurrentLoginUser$()
    //   .subscribe(user => this.currentUser = user);
  }

  logout(): void {
      this.authService.logout()
        .subscribe(() => {
        }, () => {
        }, () => {
          this.router.navigateByUrl('login');
        });
  }

  ngOnDestroy(): void {
    if (isNotNullOrUndefined(this.subscription)) {
      this.subscription.unsubscribe();
    }
  }
}
