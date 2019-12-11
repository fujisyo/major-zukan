class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string :teamname
      t.string :area
      t.timestamps
    end
  end
end
