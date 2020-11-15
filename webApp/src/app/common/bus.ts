/**
 * 汽车实体
 */
export class Bus {
  /** id */
  id: number;

  /** 车牌号 */
  bus_number:string;

  /** 最大座位数 */
  seat_number:number;

  constructor(data?:{id?:number,bus_number?:string,seat_number?:number}){
  if(data) {
    this.id = data.id;
    this.bus_number = data.bus_number;
    this.seat_number = data.seat_number;
  }
  }
}
