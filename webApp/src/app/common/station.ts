/**
 * 车站实体
 */
import { City } from './city';

export class Station {
  /** id */
  id: number;

  /** 车站名 */
  name: string;

  /** 城市 */
  city: City;

  constructor(data?: { id?: number, name?: string, city?: City }) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.city = data.city;
    }
  }
}
