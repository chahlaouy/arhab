import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators'

import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-driver-rides',
  templateUrl: './driver-rides.component.html',
  styleUrls: ['./driver-rides.component.scss'],
})
export class DriverRidesComponent implements OnInit {

  rides = []

  constructor(
    private driverSer: DriverService
  ) { }

  ngOnInit() { 

  }

  ionViewWillEnter() {
    this.driverSer.getAllRides().where("userInfo.userUID", "==", localStorage.getItem("uid") )
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            this.rides.push(doc.data())
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    })
  }
}
