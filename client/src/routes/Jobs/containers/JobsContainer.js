import { connect  } from 'react-redux'  
import { fetchJob, saveCurrentJob  } from '../modules/jobs'

import Jobs from '../components/Jobs'

import type { JobsObject  } from '../interfaces/jobs'

const mapActionCreators: {fetchJobs: Function, jobsArray: Function} = {  
}

const mapStateToProps = (state): { job: ?JobObject, jobsArray: Array<JobsObject>  } => ({  
})

export default connect(mapStateToProps, mapActionCreators)(Jobs)

