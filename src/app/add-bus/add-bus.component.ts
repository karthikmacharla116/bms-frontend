import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddbusService } from './addbus.service';
import { BusRoute } from '../BusRoute';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bms-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  busRouteForm!: FormGroup;
  addBusStatus: string = '';
  busRoutedata: any;
  constructor(private fb: FormBuilder, private addBusService: AddbusService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.busRoutedata = history.state?.data ?? {};
    this.busRouteForm = this.fb.group({
      busId: [this.busRoutedata.busId],
      busNo: [this.busRoutedata.busNo],
      routeNo: [this.busRoutedata.routeNo],
      driverName: [this.busRoutedata.driverName],
      phoneNum: [this.busRoutedata.phoneNum],
      source: [this.busRoutedata.source],
      destination: [this.busRoutedata.destination],
      feesAmount: [this.busRoutedata.feesAmount],
      stop1: [this.busRoutedata.stop1],
      stop2: [this.busRoutedata.stop2],
      stop3: [this.busRoutedata.stop3],
      stop4: [this.busRoutedata.stop4]
    })
  }

  busRouteSubmit(busRouteForm: BusRoute) {
    console.log(busRouteForm.destination);
    console.log(busRouteForm.driverName);
    if (Object.keys(this.busRoutedata).length !== 0) {
      this.addBusService.editBusRouteDetails(busRouteForm).subscribe(data => {
        this.addBusStatus = data;
      });
    } else {
      this.addBusService.saveBusRouteDetails(busRouteForm).subscribe(data => {
        this.addBusStatus = data;
      });
    }
    this.router.navigate(['/home']);
  }

  hasData(): boolean {
    return Object.keys(this.busRoutedata).length !== 0;;
  }

}