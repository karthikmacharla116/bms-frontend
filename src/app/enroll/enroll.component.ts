import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusRoute } from '../BusRoute';
import { EnrollBus } from '../EnrollBus';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnrollService } from './enroll.service';
import { Payment } from './Payment';

@Component({
  selector: 'bms-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  enrollBusForm!: FormGroup;
  busRoute!: BusRoute;
  paymentDetails!: Payment;
  enrollStatus!: string;
  paymentResponse!: Payment;

  constructor(private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder, private enrollService:EnrollService, 
    private router: Router) { }

  ngOnInit(): void {
    this.busRoute = history.state?.data ?? {};
    this.paymentDetails = {
      paymentId:0,
      amount: this.busRoute.feesAmount,
      receiptId: ""
    }
    this.enrollService.completePayment(this.paymentDetails).subscribe( (data:Payment) => {
      this.paymentResponse = data;  
    });
    console.log(this.paymentDetails.receiptId);

    this.enrollBusForm = this.fb.group({
      enrollId: ['0'],
      enrollName: [localStorage.getItem('username')],
      role: [localStorage.getItem('role')],
      feespaid: [this.busRoute.feesAmount.toString],
      busRouteId: [this.busRoute.busId],
      payment: [this.paymentDetails]
    });
  }

  enrollbusSubmit(enrollBusForm: EnrollBus){
   // this.paymentDetails.amount = enrollBusForm.amount;
    this.enrollService.addEnrollBus(enrollBusForm).subscribe(data => {
      this.enrollStatus = data;
    });
    
    this.router.navigate(['/details'], { state: { data: this.paymentResponse } });
  }

}
