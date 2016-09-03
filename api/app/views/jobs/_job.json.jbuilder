json.extract! job, :id, :title, :description, :location, :salary, :job_url, :created_at, :updated_at
json.url job_url(job, format: :json)