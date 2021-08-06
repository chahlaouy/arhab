import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerService } from '../services/passenger.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private passengerSer: PassengerService,
    private router: Router
  ) { }

  ngOnInit() {}

  onLogout(){
    this.passengerSer.signOut();
  }

}
