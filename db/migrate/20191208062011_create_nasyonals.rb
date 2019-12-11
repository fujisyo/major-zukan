class CreateNasyonals < ActiveRecord::Migration[5.0]
  def change
    create_table :nasyonals do |t|
      t.string :team
      t.string :area
      t.timestamps
    end
  end
end
