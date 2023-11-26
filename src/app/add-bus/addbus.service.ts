import { Injectable } from '@angular/core';
import { BusRoute } from '../BusRoute';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddbusService {

  constructor(private http: HttpClient) {
  }

  saveBusRouteDetails(busRouteForm: BusRoute) {
    return this.http.post<string>('/backend/addBusRoute', busRouteForm, {responseType: "json"});
  }
  editBusRouteDetails(busRouteForm: BusRoute) {
    return this.http.put<string>('/backend/editBusRoute', busRouteForm, {responseType: "json"});
  }

}
