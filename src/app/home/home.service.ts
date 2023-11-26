import { Injectable } from '@angular/core';
import { BusRoute } from '../BusRoute';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  deleteBusRouteData(busRoute: BusRoute){
    const { busId } = busRoute;
    return this.http.delete(`/backend/deleteBusRoute/${busId}`);
  }

}
