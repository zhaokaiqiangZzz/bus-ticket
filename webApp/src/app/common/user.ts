/**
 * 用户实体
 */
export class User {
  /** id */
  id: number;

  /** 用户名 */
  username: string;

  /** 密码 */
  password: string;

  /** 手机号 */
  phone: number;

  /** 身份证号 */
  identityId: string;

  /** 用户权限 */
  role: number;

  constructor(data?: { id?: number, username?: string, password?: string, phone?: number, identityId?: string, role?: number }) {
    if (data) {
      this.id = data.id;
      this.username = data.username;
      this.password = data.password;
      this.phone = data.phone;
      this.identityId = data.identityId;
      this.role = data.role;
    }
  }
}
