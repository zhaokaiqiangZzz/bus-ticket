/**
 * 车票实体
 */
import { Route } from './route';
import { User } from './user';
import { Order } from './order';

export class Ticket {
  /** id */
  id: number;

  /** 车次编号 */
  route: Route;

  /** 用户编号 */
  user: User;

  /** 订单编号 */
  order: Order;

  /** 单价 */
  price: number;

  /** 车票状态
   * 0 已支付
   * 1 已退票
   * 2 以完成（不能退票）
   */
  status: number;

  constructor(data?: { id?: number, route?: Route, user?: User, order?: Order, price?: number, status?: number }) {
    if (data) {
      this.id = data.id;
      this.route = data.route;
      this.user = data.user;
      this.order = data.order;
      this.price = data.price;
      this.status = data.status;
    }
  }
}
