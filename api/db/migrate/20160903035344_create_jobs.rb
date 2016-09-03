class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :salary
      t.string :job_url

      t.timestamps
    end
  end
end
