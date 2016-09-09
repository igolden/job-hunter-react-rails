import React from 'react'  
import type { JobObject  } from '../interfaces/jobs'
import classes from './Jobs.scss'
type Props = {  
  job: ?JobObject,
  jobsArray: Array <JobObject>
}

export const Jobs = (props: Props) => (  
                                     <div> 
                                      <h1>Jobs:</h1>
                                       <div className={classes.jobContainer}>
                                      <div className={classes.job}>
                                       <h3>Web-Developer</h3>
                                        <p>Description: A great starting job</p>
                                        <p>Location: Portland, OR</p>
                                        <p>Salary: 80,000</p>
                                        <p><a href="https://www.google.com">Apply Here</a></p>
                                       </div>
                                      </div>
                                      </div>
                                     )

                                     Jobs.propTypes = {  
                                       job: React.PropTypes.object,
                                       jobsArray: React.PropTypes.object,
                                     }

                                     export default Jobs 
