import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '../common/route';
import { Observable } from 'rxjs';
import { Page } from '../base/page';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private baseUrl = 'route';

  constructor(private httpClient: HttpClient) {
  }

  public page(page: number, size: number): Observable<Page<Route>> {
    return this.httpClient.get<Page<Route>>(`${this.baseUrl}/page`, {
      params: {
        page: String(page),
        size: String(size)
      }
    });
  }

  public delete(routeId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.baseUrl}/${routeId.toString()}`);
  }

  public save(route: Route): Observable<Route> {
    return this.httpClient.post<Route>(`${this.baseUrl}`, route);
  }

  public update(routeId: number, route: Route): Observable<Route> {
    return this.httpClient.put<Route>(`${this.baseUrl}/${routeId.toString()}`, route);
  }

  public getRouteById(routeId: number): Observable<Route> {
    return this.httpClient.get<Route>(`${this.baseUrl}/${routeId.toString()}`);
  }

  public search(startCityId: number, endCityId: number, startTime: number, page: number, size: number
  ): Observable<Page<Route>> {
    return this.httpClient.get<Page<Route>>(`${this.baseUrl}/search`, {
      params: {
        startCityId: String(startCityId),
        endCityId: String(endCityId),
        startTime: String(startTime),
        page: String(page),
        size: String(size)
      }
    });
  }
}
