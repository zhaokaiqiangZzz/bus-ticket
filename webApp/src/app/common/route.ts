import { Bus } from './bus';
import { Station } from './station';

/**
 * 车次实体
 */
export class Route {
  /** id */
  id: number;

  /** 车辆编号 */
  bus: Bus;

  /** 发车时间 */
  startTime: string;

  /** 到达时间 */
  endTime: string;

  /** 起始车站编号 */
  startStation: Station;

  /** 终点车站编号 */
  endStation: Station;

  /** 乘客数量 */
  buyNumber: number;

  /** 价格 */
  price: string;

  /** 折扣 */
  discount: number;

  constructor(data?: { id?: number, bus?: Bus, startTime?: string, endTime?: string, startStation?: Station,
    endStation?: Station, buyNumber?: number, price?: string, discount?: number }) {
    if (data) {
      this.id = data.id;
      this.bus = data.bus;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
      this.startStation = data.startStation;
      this.endStation = data.endStation;
      this.buyNumber = data.buyNumber;
      this.price = data.price;
      this.discount = data.discount;
    }
  }
}
