/**
 * 车次实体
 */
export class Route {
  /** id */
  id: number;

  /** 车辆编号 */
  bus_id:number;

  /** 发车时间 */
  start_time:string;

  /** 到达时间 */
  end_time:string;

  /** 起始车站编号 */
  start_station_id:string;

  /** 终点车站编号 */
  end_station_id:string;

  /** 乘客数量 */
  buy_number:number

  /** 价格 */
  price:string;

  /** 折扣 */
  discount:number;

  constructor(data?:{id?:number,bus_id?:number,start_time?:string,end_time?:string,start_station_id?:string,end_station_id?:string,buy_number?:number,price?:string,discount?:number}){
    if(data) {
      this.id = data.id;
      this.start_time = data.start_time;
      this.end_time = data.end_time;
      this.start_station_id = data.start_station_id;
      this.end_station_id = data.end_station_id;
      this.buy_number = data.buy_number;
      this.price = data.price;
      this.discount = data.discount;
    }
    }
}
