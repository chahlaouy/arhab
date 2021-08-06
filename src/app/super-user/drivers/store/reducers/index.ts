import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as DriverReducer from './driver.reducer'
import * as RidesReducer from './rides.reducer'

export interface DriversState {
    drivers: DriverReducer.DriverState,
    rides: RidesReducer.ridesState
}

export const reducers : ActionReducerMap<DriversState> = {
    drivers: DriverReducer.driverReducer,
    rides: RidesReducer.ridesReducer
}
/**
 * Creating A Feature Selector to Get The global object in our Store which contains our two prop drivers and rides
 */
export const getGlobalDriversState = createFeatureSelector<DriversState>('superUserDrivers');