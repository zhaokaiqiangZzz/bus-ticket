import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss']
})
export class ModifyPasswordComponent implements OnInit {
  modifyPasswordForm: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * 初始化表单
   */
  initForm(): void {
    // updateOn 作用是在什么时候更新表单数据
    // https://angular.cn/guide/form-validation#note-on-performance
    this.modifyPasswordForm = this.fb.group({
        oldPassword: [null, {
          validators: [Validators.required],
          // asyncValidators: [this.userService.oldPasswordValidator()],
          updateOn: 'blur'
        }],
        newPassword: [null, [Validators.required, Validators.minLength(5)]],
        confirmNewPassword: [null, Validators.required]
      }
      // }, {validators: this.userService.confirmPasswordValidator},
    );
  }

  submit(): void {
  }
}
