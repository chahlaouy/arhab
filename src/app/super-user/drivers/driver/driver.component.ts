import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import *  as fromStore from '../store'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {

  rides$: Observable<any>

  constructor(
    private store: Store
  ) {
    
   }

  ngOnInit() {
    this.rides$ = this.store.select(fromStore.getRidesEntitiesAsArray)
  }

}
