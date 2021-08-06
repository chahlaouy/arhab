import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private driverSer: FirebaseService
  ) { }

  ngOnInit() {}

  onLogout(){
    this.driverSer.signOut();
  }
}
