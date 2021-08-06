import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterService } from '../home.services/filter.service'

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {



  date = null
  error = null
  ngOnInit() {}

  nextStepRidePrice(){
    if (this.date == null){
      this.error = "يرجى إدخال تاريخ"
      return
    }
    this.filterSer.setFilterDate(this.date)
    this.router.navigate(['/home/filter/favorite']); 
  }
  customDayShortNames = ['Monday', 'Thursday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'];
  customPickerOptions: any;

  constructor(
    private filterSer: FilterService,
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

