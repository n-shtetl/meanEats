class CreatePostToTags < ActiveRecord::Migration[5.2]
  def change
    create_table :post_to_tags do |t|
      t.integer :post_id, null: false, foreign_key: true
      t.integer :tag_id, null: false, foreign_key: true
    end
  end
end
