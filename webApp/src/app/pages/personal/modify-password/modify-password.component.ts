import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss']
})
export class ModifyPasswordComponent implements OnInit {
  modifyPasswordForm: FormGroup;
  submitting = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

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
    this.userService.updatePassword(this.modifyPasswordForm.get('newPassword').value,
      this.modifyPasswordForm.get('oldPassword').value)
      .subscribe(() => {
        this.authService.logout().subscribe(() => {
          console.log('退出登录');
          this.router.navigateByUrl('/login');
        });
      }, () => {
        console.log('修改密码失败');
      });
  }
}
