import { Driver } from '../../models/driver.model'
import * as driverActions from '../actions/driver.actions'

export interface DriverState{
    entities: { [id: string] : Driver},
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: DriverState = {
    entities: {},
    loading: false,
    loaded: false,
    error: ""
}

export function driverReducer(
    state = initialState, action: driverActions.driverAction
    ): DriverState{

        switch(action.type){
            case driverActions.DriversActionTypes.LOAD_DRIVERS: {
                return {
                    ...state,
                    loading: true,
                    loaded: false,
                }
            }
            case driverActions.DriversActionTypes.LOAD_DRIVERS_SUCCESS: {
                const entities = action.payload
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    entities
                }
            }
            case driverActions.DriversActionTypes.LOAD_DRIVERS_FAIL: {
                return {
                    ...state,
                    loading: false,
                    loaded: false,
                    error: action.payload
                }
            }
            default: {
                return state
            }
        }
}


export const getDriversData = (state : DriverState) => state.entities;
export const getDriversLoading = (state : DriverState) => state.loading;
export const getDriversLoaded = (state : DriverState) => state.loaded;