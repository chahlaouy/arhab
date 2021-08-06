import { ActionReducerMap, createFeatureSelector} from '@ngrx/store'
import * as RidesReducer from './rides.reducers'

export interface RidesState {
    rides: RidesReducer.RidesState
}

export const reducers : ActionReducerMap<RidesState> = {
    rides: RidesReducer.ridesReducer
}
/**
 * Creating A Feature Selector to Get The global object in our Store which contains our two prop  * rides
 */
export const getGlobalRidesState = createFeatureSelector<RidesState>('homerides');