/**
 * 车次实体
 */
export class Route {
  /** id */
  id: number;

  /** 车辆编号 */
  busId: number;

  /** 发车时间 */
  startTime: string;

  /** 到达时间 */
  endTime: string;

  /** 起始车站编号 */
  startStationId: string;

  /** 终点车站编号 */
  endStationId: string;

  /** 乘客数量 */
  buyNumber: number;

  /** 价格 */
  price: string;

  /** 折扣 */
  discount: number;

  constructor(data?: { id?: number, busId?: number, startTime?: string, endTime?: string, startStationId?: string,
    endStationId?: string, buyNumber?: number, price?: string, discount?: number }) {
    if (data) {
      this.id = data.id;
      this.startTime = data.startTime;
      this.endTime = data.endTime;
      this.startStationId = data.startStationId;
      this.endStationId = data.endStationId;
      this.buyNumber = data.buyNumber;
      this.price = data.price;
      this.discount = data.discount;
    }
  }
}
