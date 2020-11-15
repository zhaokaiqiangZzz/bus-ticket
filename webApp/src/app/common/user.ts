/**
 * 用户实体
 */
export class User {
  /** id */
  id: number;

  /** 姓名 */
  name:string;

  /** 密码 */
  password:string;

  /** 手机号 */
  phone:number;

  /** 身份证号 */
  identity_id:string;

  /** 用户权限 */
  role:number;

  constructor(data?:{id?:number,name?:string,password?:string,phone?:number,identity_id?:string,role?:number}){
  if(data) {
    this.id = data.id;
    this.name = data.name;
    this.password = data.password;
    this.phone = data.phone;
    this.identity_id = data.identity_id;
    this.role = data.role;
  }
  }
}
