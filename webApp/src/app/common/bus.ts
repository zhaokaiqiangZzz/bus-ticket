/**
 * 汽车实体
 */
export class Bus {
  /** id */
  id: number;

  /** 车牌号 */
  busNumber: string;

  /** 最大座位数 */
  seatNumber: number;

  constructor(data?: { id?: number, busNumber?: string, seatNumber?: number }) {
    if (data) {
      this.id = data.id;
      this.busNumber = data.busNumber;
      this.seatNumber = data.seatNumber;
    }
  }
}
