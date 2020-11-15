/**
 * 城市实体
 */
export class City {
  /** id */
  id: number;

  /** 城市名 */
  name:string;

  constructor(data?:{id?:number,name?:string}){
    if(data) {
      this.id = data.id;
      this.name=data.name;
    }
  }
}
