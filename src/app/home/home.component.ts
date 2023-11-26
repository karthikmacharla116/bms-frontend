import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BusRoute } from '../BusRoute';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  busRoutes: BusRoute[] = [];
  role: any = 'any';
  isButtonDisabled: boolean = false;

  constructor(private http: HttpClient, private router: Router, private homeService: HomeService) { }

  ngAfterContentInit(): void {
    this.fetchBusRoutes();
  }

  ngOnInit() {
    //Fetching the role type to enable, disable the edit, delete actions
    this.role = localStorage.getItem('role');
    this.isButtonDisabled = (this.role != 'admin');
    this.fetchBusRoutes();
  }

  fetchBusRoutes() {
    this.http.get<BusRoute[]>('/backend/busRoutes')
      .subscribe((data: BusRoute[]) => {
        this.busRoutes = data;
      });
  }

  addRoute() {
    // Here we need to implement logic to add a new bus route
    // console.log('Add New Bus Route clicked');
    // console.log(this.busRoutes);
    this.router.navigate(['/addbus']);
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  enrollBusRoute(busRoute: BusRoute) {
    this.router.navigate(['/enrollbus'], { state: { data: busRoute } });
  }

  editBusRoute(busRoute: BusRoute) {
    console.log(busRoute);
    this.router.navigate(['/addbus'], { state: { data: busRoute } });
  }

  deleteBusRoute(busRoute: BusRoute) {
    this.homeService.deleteBusRouteData(busRoute).subscribe();
    // this.router.navigate(['/home'], { state: { data: busRoute } });
    this.fetchBusRoutes();
  }

}
