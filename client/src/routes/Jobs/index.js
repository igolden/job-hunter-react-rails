import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'jobs',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Jobs = require('./containers/JobsContainer').default
      const reducer = require('./modules/jobs').default

      /*  Add the reducer to the store on key 'jobs'  */
      injectReducer(store, { key: 'jobs', reducer })

      /*  Return getComponent   */
      cb(null, Jobs)
      //THIS WAS THE PROBLEM: here, we need to make sure that our JobsContainer is actually retrieved.

    /* Webpack named bundle   */
    }, 'jobs')
  }
})
