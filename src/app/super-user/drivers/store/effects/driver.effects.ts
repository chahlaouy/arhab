import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators'
import { Driver } from '../../models/driver.model';
import { DriverService } from '../../services/driver.service';
import * as driversActions from '../actions/driver.actions'

@Injectable() 
export class DriversEffect {

    constructor (
        private actions$: Actions,
        private driverSer: DriverService
    ){}

    @Effect()
    loadDrivers = this.actions$.pipe(ofType(driversActions.DriversActionTypes.LOAD_DRIVERS)).pipe(
        switchMap(() => {
            return this.driverSer.getDrivers().pipe(
                map((value) => {
                    const entities : {[id: string] : Driver} = {};
                    value.docs.forEach(doc => {
                        let index= doc.id;
                        entities[index] = {
                            id: index,
                            ...doc.data()

                        }
                    });
                    return new driversActions.LoadDriversSuccess(entities)
                }
                ),
                catchError((error) => of(new driversActions.LoadDriversFail(error)) )
            )
        })
    )
}