/**
 * 公共工具类
 */
import {isArray, isString} from 'util';

export class Utils {

  /**
   * 判断变量是否被定义
   * @param value 被定义true,否则false
   */
  static isNotNull<T>(value: T | undefined | null): value is T {
    return isNotNull(value);
  }

  /**
   * 对字符串进行简单的加密
   * @param inputString 加密后的字符串
   */
  static hash(inputString: string): number {
    let hash = 0;
    let i;
    let chr;
    for (i = 0; i < inputString.length; i++) {
      chr = inputString.charCodeAt(i);
      // tslint:disable-next-line:no-bitwise
      hash = ((hash << 5) - hash) + chr;
      // tslint:disable-next-line:no-bitwise
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  /**
   * 转换为loading字样
   * @param target 目标字符串
   * @param suffix 后缀
   * @param length 长度
   * @example
   * '请稍候' => '请稍候.'
   * '请稍候.' => '请稍候..'
   * '请稍候..' => '请稍候...'
   * '请稍候...' => '请稍候'
   */
  public static convertToLoadingFormat(target: string, suffix = '.', length = 3): string {
    const strings = target.split(suffix);
    if (strings.length <= length) {
      target += '.';
    } else {
      target = strings[0];
    }
    return target;
  }
}

export class Random {
  /**
   * 获取随机数据
   * @param width 位宽
   */
  static nextNumber(width = 32): number {
    let range = 1;
    while (width > 0) {
      range = range * 2;
      width--;
    }

    return Math.floor(Math.random() * range);
  }

  /**
   * 获取随机字符串
   * @param prefix 返回字符串的前缀
   * @param length 字符串长度
   */
  static nextString(prefix = '', length = 4): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return prefix + result;
  }
}

export class Assert {

  /**
   * 断言是数组
   * @param value 断言的值
   * @param message 出错提示
   */
  static isArray(value: any, message: string): void {
    if (!isNotNull(value) || !isArray(value)) {
      throw new Error(message);
    }
  }

  /**
   * 断言被定义
   * undefined 异常
   * null 成功
   * other 成功
   * @param args 多参数
   */
  static isDefined(...args: any[]): void {
    const message = this.validateArgs(args);
    args.forEach(value => {
      if (!isDefined(value)) {
        throw new Error(message);
      }
    });
  }

  static isObject(...args: any[]): void {
    const message = this.validateArgs(args);
    args.forEach(arg => {
      const type = typeof arg;
      const isObject = type === 'function' || type === 'object' && !!arg;
      if (!isObject) {
        throw new Error(message);
      }
    });
  }

  /**
   * 断言输入的值为字符串
   * @param args 字符串1，字符串2...提示信息
   */
  static isString(...args: any[]): void {
    const message = this.validateArgs(args);
    args.forEach(value => {
      if (!isString(value)) {
        throw new Error(message);
      }
    });
  }

  static notNull(...args: any[]): void {
    const message = this.validateArgs(args);
    args.forEach(value => {
      if (!isNotNull(value)) {
        throw new Error(message);
      }
    });
  }

  /**
   * 校验参考并返回参数的最后一项做为message提示消息返回
   * @param args 多个参数
   */
  private static validateArgs(args: any[]): string {
    if (args.length < 2) {
      throw new Error('最少输入两个参数');
    }

    if (!isString(args[args.length - 1])) {
      throw new Error('最后一个参数必须为字符串');
    }

    const message = args.pop();
    return message;
  }

  static isUndefined(param: any): void {
    if (typeof param !== 'undefined') {
      throw new Error('变量已定义');
    }
  }

  /**
   * 断言为null
   * null 成功
   * undefined 异常
   * other 异常
   * @param param 输入
   */
  static isNull(param: any): void {
    if (typeof param === 'undefined' || param !== null) {
      throw new Error('变量非空');
    }
  }
}

/**
 * 是否不为null
 * undefined -> false
 * null -> false
 * other -> true
 * @param value 值
 */
export function isNotNull<T>(value: T | undefined | null): value is T {
  return value as T !== undefined && value as T !== null;
}

/**
 * 转换为loading字样
 * @param target 目标字符串
 * @param suffix 后缀
 * @param length 长度
 * @example
 * '请稍候' => '请稍候.'
 * '请稍候.' => '请稍候..'
 * '请稍候..' => '请稍候...'
 * '请稍候...' => '请稍候'
 */
export function convertToLoadingFormat(target: string, suffix = '.', length = 3): string {
  const strings = target.split(suffix);
  if (strings.length <= length) {
    target += '.';
  } else {
    target = strings[0];
  }
  return target;
}

/**
 * 是否被定义
 * undefined -> false
 * other -> true
 * @param value 校验值
 */
export function isDefined<T>(value: T | undefined): value is T {
  return value as T !== undefined;
}

/**
 * 定义一个Clazz类型，用于参数中接收 类、接口等
 */
export type Clazz = new(...args: any[]) => any;

/**
 * 只包含属性而不包含方法
 * https://stackoverflow.com/questions/52692606/how-to-declare-a-type-in-typescript-that-only-includes-objects-and-not-functions
 */
export interface UnknownProperty {
  [k: string]: unknown;
}

export const randomBoolean = () => {
  return randomNumber(10) % 2 === 0;
};

export const randomNumber = (range = 1000) => {
  return Math.floor(Math.random() * range);
};

export const randomString = (prefix = '', length = 4) => {
  return prefix + Math.random().toString(36).slice(-length);
};

/**
 * 随机时间戳
 * @param day 随机生成的时间范围（天）
 * @param baseDate 生成时间范围基于某天
 * @sample
 * randomTimestamp(10, new Date(2020, 7, 12))
 * 返回：2020年7月12日前后10天的随机一天
 */
export const randomTimestamp = (day = 7, baseDate = new Date()) => {
  const range = 1000 * 60 * 60 * 24 * day * 2;
  return baseDate.getTime() + randomNumber(range) - range / 2;
};
