import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../../passenger/services/request.service'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators';
import * as fromStore from '../store'

@Component({
  selector: 'app-ride-edit', 
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.scss'],
})
export class RideEditComponent implements OnInit {

  ride$: Observable<any>;
  ride: any;
  constructor(
    private store: Store,
    private router: Router,
    private requestSer: RequestService
  ) { }

  ngOnInit() { 
    this.ride$ = this.store.select(fromStore.getSelectedRide).pipe(take(1))
    this.ride$.subscribe(data =>{
      this.ride = data
      }
    )
  }

  nextStepRideSeats(){
    if (localStorage.getItem("uid")){
      this.requestSer.setRideInfo(this.ride)
      this.router.navigate(["/passenger/number-seats"])
    }else {
      this.router.navigate(["/passenger/login"])
    }
  }
  backRidesList(){
    this.router.navigate(["/home/rides-list"])
  }

  ngOnDestroy(): void {}

}
