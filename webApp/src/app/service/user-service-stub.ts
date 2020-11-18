import {Observable, of} from 'rxjs';
import {User} from '../common/user';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Page} from '../base/page';
import {Pageable} from '../base/pageable';
import {cold} from 'jasmine-marbles';
import { Assert, randomNumber, randomString } from 'core';
import { randomBoolean } from '../../../../core/src/lib/testing/utils';

export class UserServiceStub {
  user: User;

  constructor() {
    this.user = new User({
      id: randomNumber(),
      sex: randomBoolean(),
      username: randomString('用户名'),
      phone: randomString('手机号'),
      isAdmin: randomBoolean(),
    });
  }

  /**
   * 通过Id获取用户
   */
  public getUserById(userId: number): Observable<User> {
    const user = this.user;
    // return testingObservable(user);
    return of(user);
  }

  public phoneExistValidator(user: User): AsyncValidatorFn {
    return (ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return of(null);
    };
  }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param name 用户姓名
   */
  public page(page: number, size: number, name: string): Observable<Page<User>> {
    Assert.isNotNullOrUndefined(page, 'page未传入');
    Assert.isNotNullOrUndefined(size, 'size未传入');
    const users = new Array<User>();
    for (let i = 0; i < 10; i++) {
      const user = this.user;
      users.push(user);
    }
    const pageUsers = new Page({content: users, pageable: new Pageable(1, 10), total: 100});
    // return testingObservable(pageUsers);
    return of(pageUsers);
  }

  /**
   * 重置密码
   * @param id 用户id
   */
  public resetPassword(id: number): Observable<void> {
    Assert.isNotNullOrUndefined(id, 'id未传入');
    return of(undefined);
  }

  /**
   * 获取所有用户
   */
  public getAll(): Observable<Array<User>> {
    return of([new User()]);
  }

  public sendHeartbeat(): void {
  }


  /**
   * 判断新手机号是否已存在于数据表中
   */
  public isUsernameExist(username: string): Observable<boolean> {
    return cold('---(x|)', {x: randomBoolean()});
  }

}
