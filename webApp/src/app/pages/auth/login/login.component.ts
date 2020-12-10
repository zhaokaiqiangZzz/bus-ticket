import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import {User} from '../../../common/user';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /** 当前模式 */
  mode: string;

  /** 登录表单对象 */
  loginForm: FormGroup;

  /** 注册表单对象 */
  registerForm: FormGroup;

  /** 错误信息 */
  errorInfo: string;

  /** 显示错误信息 */
  showErrorInfo: boolean;

  /** 注册错误信息 */
  registerErrorInfo: string;

  /** 显示注册错误信息 */
  showRegisterErrorInfo: boolean;

  /** 注册提示信息 */
  registerInfo: string;

  /** 显示注册提示信息 */
  showRegisterInfo: boolean;

  year = new Date().getFullYear();

  version: string;

  apiVersion: string;
  // showUpdateBowerTips: any;

  constructor(private authService: AuthService,
              private builder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.version = '1.0.0';
    this.apiVersion = '1.0.0';
    this.changeToLogin();
    /** 创建表单 */
    this.loginForm = this.builder.group({
      loginUsername: ['', [Validators.minLength(5),
        Validators.maxLength(11),
        Validators.pattern('\\d+'),
        Validators.required]],
      password: ['', Validators.required],
    });
    /** 创建注册表单 */
    this.registerForm = this.builder.group({
      registerUsername: ['', [Validators.minLength(5),
        Validators.maxLength(11),
        Validators.pattern('\\d+'),
        Validators.required]],
      name: ['', [Validators.minLength(1),
        Validators.maxLength(100),
        // Validators.pattern('\\w+'),
        Validators.required]],
      identityId: ['', [Validators.minLength(17),
        Validators.maxLength(18),
        Validators.pattern('\\w+'),
        Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.checkPassword
    });
  }

  /**
   * 校验密码
   * @param group 表单对象
   */
  checkPassword(group: FormGroup): {mismatch: true} {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    /** 判断两次密码是否相同 */
    if (password && confirmPassword) {
      return password === confirmPassword ? null : {mismatch: true};
    }
  }

  login(): void {
    const user = new User({username: this.loginForm.get('loginUsername').value,
      password: this.loginForm.get('password').value});
    this.authService.login(user)
      .subscribe(() => {
        this.showErrorInfo = false;
        this.authService.requestCurrentLoginUser(() => {
          this.router.navigateByUrl('dashboard');
        });
      }, () => {
        this.errorInfo = '登录失败，请检查您的用户名、密码';
        this.showErrorInfo = true;
      });
  }

  register(): void {
    const user = new User();
    user.username = this.registerForm.get('registerUsername').value;
    user.name = this.registerForm.get('name').value;
    user.identityId = this.registerForm.get('identityId').value;
    user.password = this.registerForm.get('confirmPassword').value;

    this.authService.register(user)
      .subscribe(() => {
        this.showRegisterErrorInfo = false;
        this.changeToLogin();
        this.showRegisterInfo = true;
        this.registerInfo = '注册成功，请登录。';
      }, (response: HttpErrorResponse) => {
        this.registerErrorInfo = `${response.error.message}请尝试更换用户名或检查您的网络连接`;
        this.showRegisterErrorInfo = true;
      });
  }

  changeToLogin(): void {
    this.mode = 'login';
  }

  changeToRegister(): void {
    this.mode = 'register';
  }

  get loginUsername(): AbstractControl {
    return this.loginForm.get('loginUsername');
  }

  get registerUsername(): AbstractControl {
    return this.registerForm.get('registerUsername');
  }

  get identityId(): AbstractControl {
    return this.registerForm.get('identityId');
  }

  get name(): AbstractControl {
    return this.registerForm.get('name');
  }
}
