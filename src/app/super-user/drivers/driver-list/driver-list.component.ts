import { Component, OnInit } from '@angular/core';

/**
 * Import The Store From @ngrx/store So That We Can Dispatch an Action
 */

import { Store } from '@ngrx/store'
import * as fromStore from '../store'

import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss'],
})
export class DriverListComponent implements OnInit {

  drivers$: Observable<any>;
  testEntities$: Observable<any>;
  loaded$: Observable<any>;
  constructor(
    private store: Store<fromStore.DriversState>,
    public loadingController: LoadingController
    ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadDrivers());
    this.drivers$ =  this.store.select(fromStore.getDriversDataAsArray)
    this.loaded$ = this.store.select(fromStore.getDriversloading)

    /**
     * GetEntities As Big Object For testing
     */
    // this.testEntities$ = this.store.select(fromStore.getDriversEntities)
    // this.testEntities$.subscribe(data => {
    //   console.log(data)
    // })
    this.presentLoading().then((spinner) => {
      spinner.present()
      this.loaded$.subscribe(loaded => {
        if (loaded){
          spinner.dismiss()
        }
      })
    })
  }

  async presentLoading() {
    return await this.loadingController.create({
      message: 'جار التحميل  ...',
    });
  }
  reload(){
    this.store.dispatch(new fromStore.LoadDrivers());
    this.presentLoading().then((spinner) => {
      spinner.present()
      this.loaded$.subscribe(loaded => {
        if (loaded){
          spinner.dismiss()
        }
      })
    })
    
  }

}
