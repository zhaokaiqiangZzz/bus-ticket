/**
 * 订单实体
 */
export class Order {
  /** id */
  id: number;

  /** 订单时间 */
  order_time: string;

  /** 支付时间 */
  pay_time: string;

  /** 订单状态 */
  status: string;

  /** 用户编号 */
  ride_user_id: number;

  /** 总价 */
  price: string;

  constructor(data?: { id?: number, order_time?: string, pay_time?: string, status?: string, ride_user_id?: number, price?: string }) {
    if (data) {
      this.id = data.id;
      this.order_time = data.order_time;
      this.pay_time = data.pay_time;
      this.status = data.status;
      this.ride_user_id = data.ride_user_id;
      this.price = data.price;
    }
  }
}
