
import * as ridesActions from '../actions'

export interface ridesState{
    entities: {[id: string]: any},
    loading: boolean,
    loaded: boolean,
    error: any
}

export const intialState : ridesState = {
    entities : {},
    loading: false,
    loaded: false,
    error: ""
}

export function ridesReducer(
    state = intialState, action: ridesActions.ridesActionType
): ridesState{

    switch(action.type){
        case ridesActions.RidesActionTypes.LOAD_RIDES:{
            return {
                ...state,
                loading: true,
                loaded: false,
                error: "",
            }
        }
        case ridesActions.RidesActionTypes.LOAD_RIDES_SUCCESS: {

            return {
                ...state,
                loading: false,
                loaded: true,
                entities: action.payload,
                error: "",
            }

        }
        case ridesActions.RidesActionTypes.LOAD_RIDES_FAILED: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

/**
 * It is A good Practise To Export Selectors Of Our State
 */

export const getRidesEntities = (state: ridesState ) => state.entities;

export const getRidesLoading = (state: ridesState) => state.loading;

export const getRidesLoaded = (state: ridesState) => state.loaded;

export const getRidesError = (state: ridesState) => state.error;
