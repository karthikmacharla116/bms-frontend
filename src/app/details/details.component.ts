import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollBus } from '../EnrollBus';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../enroll/Payment';

@Component({
  selector: 'bms-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  enrolledBusData!: EnrollBus[];
  paymentData!:Payment;
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.enrolledBusData = history.state?.data ?? {};
    this.paymentData = history.state?.data ?? {};
    //this.fetchEnrolledBusData();
  }

  fetchEnrolledBusData() {
    this.http.get<EnrollBus[]>('/backend/enrollBusRoute').subscribe(data => {
      this.enrolledBusData = data;
    });
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

}
