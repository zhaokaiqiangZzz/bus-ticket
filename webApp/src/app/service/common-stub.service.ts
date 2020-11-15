import {AppOnReadyItem} from './common.service';
import { Assert, UnknownProperty } from '../utils';
import {Subject} from 'rxjs';
import {first, take} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

export class CommonStubService {
  private static digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  public confirmSubject: Subject<boolean>;

  /**
   * 转换为中文字符
   * 11 -> 十一
   * 支持两位及以下
   * @param num 输入数字
   */
  public static convertToChineseCharacter(num: number): string {
    /** 截取字符串 */
    const arr = String(num).split('');
    const length = arr.length;
    /** 校验支持长度 */
    if (length <= 0 || length >= 3) {
      return '';
    }
    /** 一位，直接转换成数字 */
    if (length === 1) {
      return this.digits[num];
    }
    /** 两位，拼接单位 十 */
    let result = '';
    if (arr[0] !== '1') {
      result += this.digits[arr[0]];
    }
    result += '十';
    if (arr[1] !== '0') {
      result += this.digits[arr[1]];
    }
    return result;
  }

  constructor() {
  }

  confirm(callback?: (state?: boolean) => void, description: string = '该操作不可恢复，请谨慎操作', title: string = '请确认操作',
          confirmButtonText = '确定', cancelButtonText = '取消'): void {
    if (callback) {
      this.confirmSubject = new Subject<boolean>();
      this.confirmSubject.pipe(first()).subscribe(state => {
        callback(state);
      });
    }
  }

  getAppOnReadyItem(isReady = true): AppOnReadyItem {
    const appOnReadyItem = new AppOnReadyItem((readyState) => {
    });
    appOnReadyItem.ready = isReady;
    return appOnReadyItem;
  }

  getCurrentRouteState(): UnknownProperty {
    return {};
  }

  loading(title = '请稍后', description = '', currentProcess = '', maxStack = 1000):
    { close: () => void, currentProcessSubject: Subject<string> } {
    return {
      close: () => {
      },
      currentProcessSubject: new Subject<string>()
    };
  }

  getParams() {
    return null;
  }

  updateCurrentRouteState(params: UnknownProperty): void {

  }

  /**
   * 保存文件
   * @param blob 文件
   * @param fileName 文件名
   */
  saveFile(blob: Blob, fileName: string) {
  }

  success(callback?: () => void, description: string = '', title: string = '操作成功'): void {
  }

  appOnReady(callback: () => void) {
    if (callback) {
      callback();
    }
  }

  isMobile(phone: string): boolean {
    return true;
  }

  httpError(httpError: HttpErrorResponse, callback?: () => void): void {
  }

  checkBrowserTypeAndVersion(type: 'chrome' | 'firefox', version: string): boolean {
    return null;
  }

  error(callback?: () => void, description: string = '', title: string = '操作失败'): void {
  }
}
