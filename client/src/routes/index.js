import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Jobs from './Jobs'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Jobs,
  childRoutes: [
    CounterRoute(store)
  ]
})


export default createRoutes
