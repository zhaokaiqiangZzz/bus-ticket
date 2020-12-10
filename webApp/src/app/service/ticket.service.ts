import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../base/page';
import { Ticket } from '../common/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'ticket';

  constructor(private httpClient: HttpClient) {
  }

  public page(page: number, size: number): Observable<Page<Ticket>> {
    return this.httpClient.get<Page<Ticket>>(`${this.baseUrl}/page`, {
      params: {
        page: String(page),
        size: String(size)
      }
    });
  }

  public cancel(ticketId: number): Observable<null> {
    return this.httpClient.put<null>(`${this.baseUrl}` + `/cancel` + `/${ticketId.toString()}`, null);
  }

  public save(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(`${this.baseUrl}`, ticket);
  }

  public update(ticketId: number, ticket: Ticket): Observable<Ticket> {
    return this.httpClient.put<Ticket>(`${this.baseUrl}/${ticketId.toString()}`, ticket);
  }

  public getTicketById(ticketId: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.baseUrl}/${ticketId.toString()}`);
  }

  buy(routeId: number): Observable<null> {
    return this.httpClient.post<null>(`${this.baseUrl}/${routeId.toString()}`, null);
  }
}
