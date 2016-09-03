class JobsController < ApplicationController
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    render json: @job
  end

  def create
    @job = Job.new(job_params)

    if @job.save
      render json: @job, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
  end

  private
    def set_job
      @job = Job.find(params[:id])
    end

    def job_params
      params.require(:job).permit(:title, :description, :location, :salary, :job_url)
    end
end
