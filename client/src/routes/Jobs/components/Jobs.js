import React from 'react'  
import type { JobObject  } from '../interfaces/jobs'

type Props = {  
  job: ?JobObject,
  saved: Array<JobsObject>,
  fetchJob: Function,
  saveCurrentJob: Function
}

export const Jobs = (props: Props) => (  
                                      <div>
                                      <p>Here is where it all goes!</p>
                                      </div>
                                     )

                                     Jobs.propTypes = {  
                                       job: React.PropTypes.object,
                                       saved: React.PropTypes.array.isRequired,
                                       fetchJob: React.PropTypes.func.isRequired,
                                       saveCurrentJob: React.PropTypes.func.isRequired
                                     }

                                     export default Jobs 
