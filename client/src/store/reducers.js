import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'


//not exactly sure where asyncReducers is coming from...
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers
  })
}
// ... is a "spread" in es6 syntax -> ... is a "butterknife" syntax: if you have an array, using ... "spreads" the index out instead of manually calling each index.
// however, in this case, I believe the spread syntax is being used to merge the two arrays into one object inside the combineReducers({}) method.

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

//interesting.... we are exporting our injectReducer, which, take an argument. Our reducers get into the makeRootReducer by being passed in as arguments
//in the index.js of each route. 

export default makeRootReducer
