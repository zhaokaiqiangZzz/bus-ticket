import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from '../base/page';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected baseUrl = 'user';

  constructor(protected httpClient: HttpClient) {}
  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param name 用户姓名
   */
  public page(page: number, size: number, name: string): Observable<Page<User>> {

    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size)
    };
    if (name !== null) {
      params.name = name;
    }

    return this.httpClient.get<Page<User>>(`${this.baseUrl}/page`, {params});
  }

  /**
   * 删除
   */
  public delete(userId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.baseUrl}/${userId.toString()}`);
  }

  /**
   * 校验手机号是否存在
   * 当user存在时说明是修改，改为本身的手机号时不报错
   * @param user 修改的用户
   */
  public phoneExistValidator(user: User): AsyncValidatorFn {
    return (ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      if (user && ctrl.value === user.username) {
        return of(null);
      }

      return this.existByPhone(ctrl.value)
        .pipe(map((phoneExist: boolean) => (phoneExist ? {phoneExistError: true} : null)),
          catchError(() => null));
    };
  }

  /**
   * 手机号是否存在
   * @param phone 手机号
   */
  public existByPhone(phone: string): Observable<boolean> {
    return this.httpClient.get<boolean>(this.baseUrl + '/existByPhone/' + phone);
  }

  /**
   * 新增
   */
  public save(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }

  /**
   * 通过Id获取用户
   */
  public getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${userId.toString()}`);
  }

  /**
   * 更新
   */
  public update(userId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${userId.toString()}`, user);
  }
}
