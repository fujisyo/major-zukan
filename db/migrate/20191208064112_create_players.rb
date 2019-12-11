class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.text :image
      t.string :position
      t.string :from
      t.timestamps
    end
  end
end
