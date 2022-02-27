import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private url = "https://localhost:44348/api/Buses"

  constructor(private http: HttpClient) { }

  getBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.url + '/GetBuses')
  }

  getBus(id: number): Observable<Bus> {
    return this.http.get<Bus>(this.url + '/GetBus/' + id);
  }
  editBus(bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(this.url + '/PutBus/' + bus.id, bus)
  }

  addBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.url + '/PostBus', bus)
  }

  deleteBus(id: number): Observable<Bus> {
    return this.http.delete<Bus>(this.url + '/DeleteBus/' + id);
  }

}
