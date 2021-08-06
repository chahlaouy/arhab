import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators'
import { HomeService } from '../../home.services/home.service';
import * as ridesActions from '../actions/rides.actions'

@Injectable() 
export class RidesEffect {
    
    private date = new Date();
    constructor ( 
        private actions$: Actions,
        private homeService: HomeService
    ){}

    @Effect()
    loadRides = this.actions$.pipe(ofType(ridesActions.RidesActionTypes.LOAD_RIDES)).pipe(
        switchMap(() => {
            return this.homeService.getAllRides().pipe(
                map((value) => {
                    const entities : {[id: string] : any} = {};
                    value.docs.forEach(doc => {
                        let index= doc.id;
                        let dayFromComp = this.date.getDate();
                        let monthFromComp = this.date.getMonth();
                        let monthFromRide = doc.data().rideInfo.rideDate.rideDayAndMonth.monthValue;
                        let dayFromRide = doc.data().rideInfo.rideDate.rideDayAndMonth.day;

                        if (((parseInt(monthFromRide)) == (monthFromComp + 1) && (parseInt(dayFromRide) >= dayFromComp)) || (parseInt(monthFromRide) > (monthFromComp + 1))){
                            entities[index] = {
                                id: index,
                                ...doc.data()

                            }
                        }
                        // if (){
                        //     entities[index] = {
                        //         id: index,
                        //         ...doc.data()

                        //     }
                        // }
                    });
                    return new ridesActions.LoadRidesSuccess(entities)
                }
                ),
                catchError((error) => of(new ridesActions.LoadRidesFail(error)) )
            )
        })
    )
}