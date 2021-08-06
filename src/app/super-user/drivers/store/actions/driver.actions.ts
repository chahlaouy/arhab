import { Action } from '@ngrx/store';

export enum DriversActionTypes {
    LOAD_DRIVERS = "[Driver] load Drivers",
    LOAD_DRIVERS_SUCCESS = "[Driver] load Driver Success",
    LOAD_DRIVERS_FAIL = "[Driver] load Driver fail",
}

export class LoadDrivers implements Action {
    readonly type = DriversActionTypes.LOAD_DRIVERS
}

export class LoadDriversSuccess implements Action {
    readonly type = DriversActionTypes.LOAD_DRIVERS_SUCCESS
    constructor(public payload: any){}
}

export class LoadDriversFail implements Action {
    readonly type = DriversActionTypes.LOAD_DRIVERS_FAIL
    constructor(public payload: string){}
}

export type driverAction = LoadDrivers | LoadDriversSuccess | LoadDriversFail