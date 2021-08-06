import { Action } from '@ngrx/store'

/**
 * Exporting an Enum Object That Contains Actions Types
 */
export enum RidesActionTypes{ 
    LOAD_RIDES = '[Drivers] load rides',
    LOAD_RIDES_SUCCESS = '[Drivers] load rides success',
    LOAD_RIDES_FAILED = '[Drivers] load rides failed'
}

/**
 * Action Creators Classes Which Implements The Action Interface: We Use This Classes To Dispatch An Action
 * 
 * The Action Interface has two properties the type of the action and the payload which is optional
 */

 export class loadRides implements Action {
     readonly type = RidesActionTypes.LOAD_RIDES
 }

 export class loadRidesSuccess implements Action {
     readonly type = RidesActionTypes.LOAD_RIDES_SUCCESS

     constructor(public payload: any){}
 }

 export class loadRidesFailed implements Action{
     readonly type = RidesActionTypes.LOAD_RIDES_FAILED

     constructor(public payload: any){}
 }

 export type ridesActionType = loadRides | loadRidesSuccess | loadRidesFailed