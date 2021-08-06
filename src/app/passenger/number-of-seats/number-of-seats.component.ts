import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../services/request.service'

@Component({
  selector: 'app-number-of-seats',
  templateUrl: './number-of-seats.component.html',
  styleUrls: ['./number-of-seats.component.scss'],
})
export class NumberOfSeatsComponent implements OnInit {

  error: any;
  numberOfSeats: any;
  allowedNumberOfSeats: any
  constructor(
    private requestSer: RequestService,
    private router: Router
  ) { }


  ngOnInit() {
    this.allowedNumberOfSeats = this.requestSer.allowedNumberOfSeats()
  }

  sendRequest(){
    if(!this.numberOfSeats){
      this.error = "الرجاء إدخال عدد المقاعد"
      return
    }
    this.requestSer.setNumberOfSeatsAndSaveRequest(this.numberOfSeats)
    this.router.navigate(['/passenger/chat-interface']);
  }

}
