class AddForeignKeyToTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :parent_id, :integer
    add_foreign_key :tags, :tags, column: :parent_id
  end
end
