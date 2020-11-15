import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showUpdateBowerTips: boolean;

  /** 表单对象 */
  loginForm: FormGroup;

  /** 是否显示验证码选项 */
  showValidateCode: boolean;

  /** 验证码按钮 是否禁用 */
  verificationCodeButtonDisabled = true;

  /** 验证码按钮提示信息 */
  validateCodeInfo = '发送验证码';

  /**
   * 显示oneTimePassword
   */
  showOtpCode = false;

  /**
   * 是否显示超级密码输入框
   */
  showSuperToken = false;

  /** 错误信息 */
  errorInfo: string;

  /** 提交状态 */
  submitting = false;

  year = new Date().getFullYear();

  version: string;

  apiVersion: string;

  constructor(private builder: FormBuilder) {

  }

  ngOnInit(): void {
    /** 创建表单 */
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      verificationCode: ['0000', Validators.required],
      otpCode: ['0000', Validators.required],
      superToken: ['']
    });
  }

  login(): void {
  }

  sendVerificationCode(): void {
  }
}
