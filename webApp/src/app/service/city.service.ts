import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../common/city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl = 'city';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Array<City>> {
    return this.httpClient.get<Array<City>>(`${this.baseUrl}`);
  }
}
