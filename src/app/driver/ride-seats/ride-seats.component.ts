import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-ride-seats',
  templateUrl: './ride-seats.component.html',
  styleUrls: ['./ride-seats.component.scss'],
})
export class RideSeatsComponent implements OnInit {

  error: any;
  numberOfSeats: any;
  constructor(
    private userSer: DriverService,
    private router: Router
  ) { }


  ngOnInit() {}

  nextStepRidePrice(){
    if(!this.numberOfSeats){
      this.error = "الرجاء إدخال عدد المقاعد"
      return
    }
    this.userSer.setNumberOfSeats(this.numberOfSeats);
    this.router.navigate(['/driver/add/ride-day']);
  }

}
