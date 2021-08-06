import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../services/driver.service'

@Component({
  selector: 'app-ride-date-day',
  templateUrl: './ride-date-day.component.html',
  styleUrls: ['./ride-date-day.component.scss'],
})
export class RideDateDayComponent implements OnInit {


  date = null
  error = null
  ngOnInit() {}

  nextStepRidePrice(){
    if (this.date == null){
      this.error = "يرجى إدخال تاريخ"
      return
    }
    this.userSer.setRideDayAndMonth(this.date);
    console.log(this.date)
    this.router.navigate(['/driver/add/ride-hour']); 
  }
  customDayShortNames = ['Monday', 'Thursday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
  customPickerOptions: any;

  constructor(
    private userSer: DriverService,
    private router: Router,
  ) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (date) => {
          this.date = date
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
}
