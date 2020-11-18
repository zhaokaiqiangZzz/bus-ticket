/**
 * 车站实体
 */
export class Station {
  /** id */
  id: number;

  /** 车站名 */
  name: string;

  /** 城市 */
  cityId: string;

  constructor(data?: { id?: number, name?: string, cityId?: string }) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.cityId = data.cityId;
    }
  }
}
