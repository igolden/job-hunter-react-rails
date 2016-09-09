import { connect  } from 'react-redux'  
import { fetchJob, saveCurrentJob  } from '../modules/jobs'

import Jobs from '../components/Jobs'

import type { JobsObject  } from '../interfaces/jobs'

const mapActionCreators: {fetchJob: Function, saveCurrentJob: Function} = {  
//  fetchJobs,
  saveCurrentJob
}

const mapStateToProps = (state): { job: ?JobObject, saved: Array<JobsObject>  } => ({  
//  job: state.job.jobs.find(job => job.id === state.job.current),
//  saved: state.job.jobs.filter(job => state.job.saved.indexOf(job.id) !== -1)
})

export default connect(mapStateToProps, mapActionCreators)(Jobs)

