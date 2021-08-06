import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators';
import * as fromStore from '../store'

@Component({
  selector: 'app-driver-edit', 
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss'],
})
export class DriverEditComponent implements OnInit {

  driver$: Observable<any>
  driver: any;
  constructor(
    private store: Store<fromStore.DriversState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.loadRides());
    this.store.select(fromStore.getRidesEntitiesAsArray).subscribe(data => {
      console.log(data)
    })
    this.driver$ = this.store.select(fromStore.getSelectedDriver).pipe(take(1))
    this.driver$.subscribe(data =>{
      this.driver = data
      }
    )
  }
  ngOnDestroy(): void {}

}
