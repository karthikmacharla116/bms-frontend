import { Payment } from "./enroll/Payment";


export interface EnrollBus {
  enrollId: number;
  enrollName: string;
  role: string;
  //amount: string;
  busRouteId: number;
  payment:Payment
}