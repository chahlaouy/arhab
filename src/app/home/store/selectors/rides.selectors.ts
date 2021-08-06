
import { createSelector } from '@ngrx/store'

import * as fromRoot from '../../../store'
import * as fromFeature from '../reducers'
import * as fromRides from '../reducers/rides.reducers'

/* **** Handling The Rides Object **** */
/**
 * Get The Rides State which is of type RidesState
 *  rides:
 * {
 *  entities: ...,
 *  loading: ....,
 *  loaded: ....,
 *  error: ....,
 * }
 */

/**
 * Getting The Rides Object from our Global State
 * 
 * our Gloabal State iS oF Type DriversState 
*/

export const getRidesState = createSelector(fromFeature.getGlobalRidesState, (state : any) => state.rides);

/**
 * Get The entities From The Rides Object
 */

export const getRidesEntities = createSelector(getRidesState, fromRides.getRidesEntities);

 /**
  * Getting The entities inside the rides object as an array
  */

export const getRidesEntitiesAsArray = createSelector(getRidesEntities, (entities) => {
    /**
    * Convertitng the entities Object into An Array
    */

    return Object.keys(entities).map(id => entities[id])
})

/**
 * Get The Sected Ride
 */

export const getSelectedRide = createSelector(getRidesEntities,
    fromRoot.getRouterState,
    (entities, router): any => {
        return router.state && entities[router.state.params.rideId]
    }
    )

/**
 * Getting The Loading, Loaded and Error Properties
 */

export const getRidesLoaded = createSelector(getRidesState, fromRides.getRidesLoaded)
export const getRidesLoading = createSelector(getRidesState, fromRides.getRidesLoading)
export const getRidesError = createSelector(getRidesState, fromRides.getRidesError)

