import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators'
import { DriverService } from '../../services/driver.service';
import * as ridesActions from '../actions/rides.actions'
import { Store } from "@ngrx/store"
import * as fromStore from '../../store'
@Injectable() 
export class RidesEffect {

    selectedDriver: any;
    
    constructor (
        private actions$: Actions,
        private driverSer: DriverService,
        private store: Store
    ){
        this.store.select(fromStore.getSelectedDriver).subscribe(data => {
            this.selectedDriver = data
        })
    }

    @Effect()
    loadRides = this.actions$.pipe(ofType(ridesActions.RidesActionTypes.LOAD_RIDES)).pipe(
        switchMap(() => {
            return this.driverSer.getRides().pipe(
                map((value) => {
                    const entities : {[id: string] : any} = {};
                    value.docs.forEach(doc => {
                        let index= doc.id;
                        let data = doc.data();
                        if (data.userInfo.userUID == this.selectedDriver.id){
                            entities[index] = {
                                id: index,
                                ...doc.data()
                        }

                        }
                    });
                    return new ridesActions.loadRidesSuccess(entities)
                }
                ),
                catchError((error) => of(new ridesActions.loadRidesFailed(error)) )
            )
        })
    )
}