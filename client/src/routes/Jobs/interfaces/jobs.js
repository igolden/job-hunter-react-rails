export type JobsObject = {  
  id: number,
  title: string,
  description: string,
  location: string,
  salary: string,
  job_url: string
}

export type JobsStateObject = {  
  current: ?number,
  fetching: boolean,
  saved: Array<number>,
  jobs: Array<JobObject>
}

//unsure about JobsStateObject... what is its application?
