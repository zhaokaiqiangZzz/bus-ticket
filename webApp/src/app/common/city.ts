/**
 * 城市实体
 */
export class City {
  /** id */
  id: number;

  /** 城市名 */
  name: string;

  pinyin: string;

  primaried: boolean;

  constructor(data?: { id?: number, name?: string, pinyin?: string, primaried?: boolean }) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.pinyin = data.pinyin;
      this.primaried = data.primaried;
    }
  }
}
