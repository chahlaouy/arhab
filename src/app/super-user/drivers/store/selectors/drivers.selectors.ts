
import { createSelector } from '@ngrx/store'

import * as fromRoot from '../../../../store'
import * as fromFeature from '../reducers'
import * as fromDriver from '../reducers/driver.reducer'
import * as fromRides from '../reducers/rides.reducer'

// The Drivers Object InSide Our DriversState
// which actually Has Two Properties 
// Drivers And Rides 

/* **** Handling The Drivers Object */
/**
 * Get The Drivers State which is of type DriverState
 *  drivers:
 * {
 *  entities: ...,
 *  loading: ....,
 *  loaded: ....,
 *  error: ....,
 * }
 */

export const getDriversState = createSelector(fromFeature.getGlobalDriversState, (state:any) => state.drivers)

/**
 * Get The Entites from The state 
 */

export const getDriversEntities = createSelector(getDriversState, fromDriver.getDriversData)
/**
 * 
 * Get The selected Driver from The Router State the param then the id 
 */

export const getSelectedDriver = createSelector(getDriversEntities,
    fromRoot.getRouterState,
    (entities, router): any => {
        return router.state && entities[router.state.params.driverId]
    }
    )
/**
 * Get The Driver Entities As An Array so that We Can Proccess It In our Component
 */

export const getDriversDataAsArray = createSelector(getDriversEntities, (entities) => {

    /**
    * Convertitng the entities Object into An Array
    */

    return Object.keys(entities).map(id => entities[id])
})

/**
 * Get The Loaded Prop From Our DriverState
 */

export const getDriversLoaded = createSelector(getDriversState, fromDriver.getDriversLoaded)
/**
 * Get The Loading Prop From Our DriverState
 */

export const getDriversloading = createSelector(getDriversState, fromDriver.getDriversLoading)



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

export const getRidesState = createSelector(fromFeature.getGlobalDriversState, (state : any) => state.rides);

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

