// ------------------------------------
// Constants
// ------------------------------------

export const REQUEST_JOB = 'REQUEST_JOB'
export const RECEIVE_JOB = 'RECEIVE_JOB'
export const SAVE_CURRENT_JOB = 'SAVE_CURRENT_JOB'


// ------------------------------------
// Actions
// ------------------------------------
//

export function requestJob (): Action {  
  return {
    type: REQUEST_JOB
  }
}

let availableId = 0  
export function receiveJob (title: string, location: string, description: string, salary: string, job_url: string): Action {  
  return {
    type: RECEIVE_JOB,
    payload: {
      title,
      location,
      description,
      salary,
      job_url,
      id: availableId++
    }
  }
}

export function saveCurrentJob (): Action {  
  return {
    type: SAVE_CURRENT_JOB
  }
}

// REQUEST JOBS VIA API
// ------------------------------------

//export const fetchJobs = (): Function => {  
  //return (dispatch: Function): Promise => {
    //dispatch(requestJob())
//place our actual api call below:
   // return fetch('')
   // .then(data => data.text())
   // .then(text => dispatch(recieveJob(text)))
 // }
//}

// Action Handlers
// ------------------------------------
export const actions = {  
  requestJob,
  receiveJob,
 // fetchJobs,
  saveCurrentJob
}

const JOB_ACTION_HANDLERS = {  
  [REQUEST_JOB]: (state: JobStateObject): JobStateObject => {
        return ({ ...state, fetching: true  })
  },
  [RECEIVE_JOB]: (state: JobStateObject, action: {payload: JobObject}): JobStateObject => {
        return ({ ...state, jobs: state.jobs.concat(action.payload), current: action.payload.id, fetching: false  })      
  },
  [SAVE_CURRENT_JOB]: (state: JobStateObject): JobStateObject => {
        return state.current != null ? ({ ...state, saved: state.saved.concat(state.current)  }) : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------


const initialState: JobStateObject = { fetching: false, current: null, jobs: [], saved: []  }  
export default function jobReducer (state: JobStateObject = initialState, action: Action): JobStateObject {  
const handler = JOB_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
