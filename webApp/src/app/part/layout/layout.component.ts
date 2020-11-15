import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  /**
   * 当前是否为默认密码
   */
  default: boolean;

  constructor(
    // private userService: UserService
  ) {
  }

  ngOnInit(): void {
    /**
     * 验证当前用户是否为默认密码
     */
    // this.userService.defaultPassword$.subscribe((value: boolean) => {
    //   this.default = value;
    // });
  }

  /**
   * 关闭提示信息
   */
  closeToast(): void {
    this.default = false;
  }
}
