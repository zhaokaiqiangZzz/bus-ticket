/**
 * 车站实体
 */
export class Station {
  /** id */
  id: number;

  /** 车站名*/
  name:string;

  /** 城市名 */
  city_id:string;

  constructor(data?:{id?:number,name?:string,city_id?:string}){
    if(data) {
      this.id = data.id;
      this.name=data.name;
      this.city_id=data.city_id;
    }
  }
}
