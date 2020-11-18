/**
 * 车票实体
 */
export class Ticket {
  /** id */
  id: number;

  /** 车次编号 */
  routeId: number;

  /** 用户编号 */
  payUserId: number;

  /** 订单编号 */
  orderId: number;

  /** 单价 */
  price: number;

  /** 车票状态 */
  status: string;

  constructor(data?: { id?: number, routeId?: number, payUserId?: number, orderId?: number, price?: number, status?: string }) {
    if (data) {
      this.id = data.id;
      this.routeId = data.routeId;
      this.payUserId = data.payUserId;
      this.orderId = data.orderId;
      this.price = data.price;
      this.status = data.status;
    }
  }
}
