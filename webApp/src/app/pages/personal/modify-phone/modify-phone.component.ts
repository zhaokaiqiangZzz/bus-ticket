import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {CommonService} from '../../../service/common.service';
import {AuthService} from '../../../service/auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-modify-phone',
  templateUrl: './modify-phone.component.html',
  styleUrls: ['./modify-phone.component.scss']
})
export class ModifyPhoneComponent implements OnInit {
  userForm: FormGroup;

  subscription: Subscription;

  /** 错误信息 */
  errorInfo: string;

  /** 错误信息 */
  errorCodeInfo: string;

  /** 显示错误信息 */
  showErrorInfo: boolean;

  /** 显示错误信息 */
  showErrorCodeInfo: boolean;


  submitting = false;

  constructor(private userService: UserService,
              private builder: FormBuilder,
              private router: Router,
              private commonService: CommonService,
              private authService: AuthService) {
    this.createForm();
  }

  createForm(): void {
    this.userForm = this.builder.group({
      username: [{value: '', disabled: true}, Validators.required],
      phoneNumber: ['', [Validators.required]]
    });
  }

  initForm(currentUser): void {
    if (currentUser) {
      this.userForm.patchValue({
        username: currentUser.username,
      });
    }
  }

  ngOnInit(): void {
    this.commonService.appOnReady(() => {
      this.init();
    });
  }

  init(): void {
    this.subscription = this.authService.getCurrentLoginUser$()
      .subscribe((currentUser) => this.initForm(currentUser));
  }

  get phoneNumber(): AbstractControl {
    return this.userForm.get('phoneNumber');
  }

  /**
   * 修改手机号
   */
  nextStep(): void {
    this.submitting = true;
    this.userService.updatePhoneNumber(this.userForm.get('username').value)
      .subscribe(() => {
        this.submitting = false;
        this.commonService.success(() => {
          // 修改手机号后注销
          this.authService.logout().subscribe(() => {
            this.router.navigateByUrl('login');
          }, () => {
            this.router.navigateByUrl('login');
          });
        }, '手机号修改成功');
      }, (response: HttpErrorResponse) => {
        this.submitting = false;
        this.commonService.httpError(response);
      });
  }
}
