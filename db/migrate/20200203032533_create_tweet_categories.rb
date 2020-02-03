class CreateTweetCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :tweet_categories do |t|
      t.integer :tweet_id
      t.integer :category_id
      t.timestamps
    end
    add_index :tweet_categories, :tweet_id
    add_index :tweet_categories, :category_id
    add_index :tweet_categories, [:tweet_id,:category_id],unique: true
  end
end
