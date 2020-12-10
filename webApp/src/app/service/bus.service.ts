import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../common/bus';
import { Observable } from 'rxjs';
import { Page } from '../base/page';
import { Station } from '../common/station';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private baseUrl = 'bus';

  constructor(private httpClient: HttpClient) {
  }

  public page(page: number, size: number): Observable<Page<Bus>> {
    return this.httpClient.get<Page<Bus>>(`${this.baseUrl}/page`, {
      params: {
        page: String(page),
        size: String(size)
      }
    });
  }

  public delete(busId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.baseUrl}/${busId.toString()}`);
  }

  public save(bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>(`${this.baseUrl}`, bus);
  }

  public update(busId: number, bus: Bus): Observable<Bus> {
    return this.httpClient.put<Bus>(`${this.baseUrl}/${busId.toString()}`, bus);
  }

  public getBusById(busId: number): Observable<Bus> {
    return this.httpClient.get<Bus>(`${this.baseUrl}/${busId.toString()}`);
  }

  public getAll(): Observable<Array<Bus>> {
    return this.httpClient.get<Array<Bus>>(`${this.baseUrl}`);
  }

  /**
   * 车牌号是否已经存在
   * @param name 车辆名
   */
  public busNumberExist(busNumber: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseUrl}/busNumberExist/${busNumber}`);
  }
}
