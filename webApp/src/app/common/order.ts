/**
 * 订单实体
 */
export class Order {
  /** id */
  id: number;

  /** 订单时间 */
  orderTime: string;

  /** 支付时间 */
  payTime: string;

  /** 订单状态 */
  status: string;

  /** 用户编号 */
  userId: number;

  /** 总价 */
  price: string;

  constructor(data?: { id?: number, orderTime?: string, payTime?: string, status?: string, userId?: number, price?: string }) {
    if (data) {
      this.id = data.id;
      this.orderTime = data.orderTime;
      this.payTime = data.payTime;
      this.status = data.status;
      this.userId = data.userId;
      this.price = data.price;
    }
  }
}
