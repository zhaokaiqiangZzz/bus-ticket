import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Station } from '../common/station';
import { Page } from '../base/page';
import { City } from '../common/city';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private baseUrl = 'station';

  constructor(private httpClient: HttpClient) {
  }

  public page(page: number, size: number): Observable<Page<Station>> {
    return this.httpClient.get<Page<Station>>(`${this.baseUrl}/page`, {
      params: {
        page: String(page),
        size: String(size)
      }
    });
  }

  public delete(stationId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.baseUrl}/${stationId.toString()}`);
  }

  public save(station: Station): Observable<Station> {
    console.log(station);
    return this.httpClient.post<Station>(`${this.baseUrl}`, station);
  }

  public update(stationId: number, station: Station): Observable<Station> {
    return this.httpClient.put<Station>(`${this.baseUrl}/${stationId.toString()}`, station);
  }

  public getStationById(stationId: number): Observable<Station> {
    return this.httpClient.get<Station>(`${this.baseUrl}/${stationId.toString()}`);
  }

  public getAll(): Observable<Array<Station>> {
    return this.httpClient.get<Array<Station>>(`${this.baseUrl}`);
  }
}
