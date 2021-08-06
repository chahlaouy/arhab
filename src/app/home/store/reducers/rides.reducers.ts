import * as ridesActions from '../actions/rides.actions'

// import * as fromRoot from '../../../../app.state'

// export interface AppState extends fromRoot.AppState {
//     drivers: DriverState
// }

export interface RidesState{
    entities: { [id: string] : any},
    loading: boolean,
    loaded: boolean,
    error: string
}

export const initialState: RidesState = {
    entities: {},
    loading: false,
    loaded: false,
    error: ""
}

export function ridesReducer(
    state = initialState, action: ridesActions.ridesAction
    ): RidesState{

        switch(action.type){
            case ridesActions.RidesActionTypes.LOAD_RIDES: {
                return {
                    ...state,
                    loading: true,
                    loaded: false,
                }
            }
            case ridesActions.RidesActionTypes.LOAD_RIDES_SUCCESS: {
                const entities = action.payload
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    entities
                }
            }
            case ridesActions.RidesActionTypes.LOAD_RIDES_FAIL: {
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


export const getRidesEntities = (state : RidesState) => state.entities;
export const getRidesLoading = (state : RidesState) => state.loading;
export const getRidesLoaded = (state : RidesState) => state.loaded;
export const getRidesError = (state : RidesState) => state.error;