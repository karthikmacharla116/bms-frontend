import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollBus } from '../EnrollBus';
import { Payment } from './Payment';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { }

  addEnrollBus(enrollBus: EnrollBus) {
    return this.http.post<string>('/backend/enrollBusRoute', enrollBus, {responseType: "json"});
  }

  completePayment(paymentDetails:Payment) {
    return this.http.post<Payment>('/backend/payments', paymentDetails, {responseType: "json"});
  }

}
