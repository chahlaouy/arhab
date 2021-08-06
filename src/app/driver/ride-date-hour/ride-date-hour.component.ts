import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'
@Component({
  selector: 'app-ride-date-hour',
  templateUrl: './ride-date-hour.component.html',
  styleUrls: ['./ride-date-hour.component.scss'],
})
export class RideDateHourComponent implements OnInit {

  
  hour = null
  error = null
  customPickerOptions: any;

  constructor(
    private userSer: DriverService,
    private router: Router,
  ) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (hour) => {
          this.hour = hour 
        }
      }, {
        text: 'cancel',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {}

  nextStepRidePrice(){
    if (this.hour == null){
      this.error = "يرجى إدخال تاريخ"
      return
    }
    this.userSer.setRideHour(this.hour);
    this.router.navigate(['/driver/add/ride-price']); 
  }

}
