import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store'
import * as fromStore from '../store'

import { LoadingController } from '@ionic/angular';

import  { FilterService } from '../home.services/filter.service'

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html', 
  styleUrls: ['./rides-list.component.scss'],
})
export class RidesListComponent implements OnInit {

  rides: any; 
  loaded$: Observable<any>;

  ridesFilter: any;
  constructor(
    private filterSer: FilterService,
    private router: Router,
    private store: Store,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
    // this.store.dispatch(new fromStore.LoadRides());
    // this.store.select(fromStore.getRidesEntitiesAsArray).subscribe(data => {
    //   this.rides = data
    // })
    // this.loaded$ = this.store.select(fromStore.getRidesLoading)
   
  }

  pushHome(){
    this.router.navigate(["/home"])
  }

  async presentLoading() {
    return await this.loadingController.create({
      message: 'جار التحميل  ...',
    });
  }
  reload(){
    this.store.dispatch(new fromStore.LoadRides());
    this.presentLoading().then((spinner) => {
      spinner.present()
      this.loaded$.subscribe(loaded => {
        if (loaded){
          spinner.dismiss()
        }
      })
    })
    
  }
  
  ionViewWillEnter() {
    this.ridesFilter = this.filterSer.getFilterObject();
    this.store.dispatch(new fromStore.LoadRides());
    this.store.select(fromStore.getRidesEntitiesAsArray).subscribe(data => {
      if (this.ridesFilter){
        this.rides = data.filter(item => {
          return this.ridesFilter.filterDestination.adminAreaLevel1 == item.rideInfo.rideDestination.adminAreaLevel1 && this.ridesFilter.filterSource.adminAreaLevel1 == item.rideInfo.rideSource.adminAreaLevel1
        })
      }
      else {
        this.rides = data
      }
    })
  }
  
}
