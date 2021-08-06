import { Action } from '@ngrx/store';

export enum RidesActionTypes {
    LOAD_RIDES = "[home] load Rides",
    LOAD_RIDES_SUCCESS = "[home] load Rides Success",
    LOAD_RIDES_FAIL = "[home] load Rides fail",
}

export class LoadRides implements Action {
    readonly type = RidesActionTypes.LOAD_RIDES
}

export class LoadRidesSuccess implements Action {
    readonly type = RidesActionTypes.LOAD_RIDES_SUCCESS
    constructor(public payload: any){}
}

export class LoadRidesFail implements Action {
    readonly type = RidesActionTypes.LOAD_RIDES_FAIL
    constructor(public payload: string){}
}

export type ridesAction = LoadRides | LoadRidesSuccess | LoadRidesFail