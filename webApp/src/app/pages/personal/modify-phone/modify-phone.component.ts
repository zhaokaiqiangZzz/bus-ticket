import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class UniqueUsernameValidator {
}

@Component({
  selector: 'app-modify-phone',
  templateUrl: './modify-phone.component.html',
  styleUrls: ['./modify-phone.component.scss']
})
export class ModifyPhoneComponent implements OnInit {
  userForm: FormGroup;

  /** 错误信息 */
  errorInfo: string;

  /** 错误信息 */
  errorCodeInfo: string;

  /** 显示错误信息 */
  showErrorInfo: boolean;

  /** 显示错误信息 */
  showErrorCodeInfo: boolean;

  /** 验证码按钮 是否禁用 */
  verificationCodeButtonDisabled = true;

  /** 验证码按钮 是否禁用 */
  codeButtonDisabled = true;

  /** 验证码按钮提示信息 */
  validateCodeInfo = '发送验证码';

  /** 验证码按钮提示信息 */
  codeInfo = '发送验证码';


  submitting = false;
  phoneNumber: any;

  constructor(private builder: FormBuilder) {
    this.createForm();
  }
  createForm(): void {
    this.userForm = this.builder.group({
      username: [{value: '', disabled: true}, Validators.required],
      verificationCode: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  nextStep(): void {

  }
}
