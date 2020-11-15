/**
 * 车票实体
 */
export class Ticket {
  /** id */
  id: number;

  /** 车次编号 */
  route_id:number;

  /** 用户编号 */
  pay_user_id:number;

  /** 订单编号 */
  order_id:number;

  /** 单价 */
  price:number;

  /** 车票状态 */
  status:string;

  constructor(data?:{id?:number,route_id?:number,pay_user_id?:number,order_id?:number,price?:number,status?:string}){
    if(data){
      this.id=data.id;
      this.route_id=data.route_id;
      this.pay_user_id=data.pay_user_id;
      this.order_id=data.order_id;
      this.price=data.price;
      this.status=data.status;
    }
  }
}
